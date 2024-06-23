import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/user";
import recipeReducer from "./reducers/recipe";

export const store = configureStore({
  reducer: {
    user: userReducer,
    recipe: recipeReducer,
  },
});
