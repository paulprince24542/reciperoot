import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../../config/firebase";

const initialState = {
  recipes: [],
  loading: false,
};

export const fetchRecipes = createAsyncThunk(
  "/recipe/fetchRecipes",
  async () => {
    try {
      //   console.log("Fetching Data");
      var data = [];
      const db = getFirestore(app);
      const recipeData = await getDocs(collection(db, "recipe"));
      //   console.log(recipeData);
      recipeData.forEach((doc) => {
        data.push(doc.data());
      });
      //   console.log(data);
      return data;
    } catch (err) {}
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.recipes = payload;
        state.loading = true;
      })
      .addCase(fetchRecipes.pending, (state, action) => {
        console.log(action);
        state.loading = false;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.recipes = [];
      });
  },
});

export default recipeSlice.reducer;
