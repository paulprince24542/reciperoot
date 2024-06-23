import React, { useEffect, useState } from "react";

import "./dashboard.css";
import RecipeCard from "../../components/recipecard/recipecard";

import Navbar from "../../components/navbar/navbar";
import Modal from "../../components/modal/modal";
import Loader from "../../components/loader/loader";

// import dishesData from "./dishesData";
import { CirclePlus } from "lucide-react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../redux/reducers/recipe";

function dashboard() {
  // Fetch Recipies

  const dispatch = useDispatch();
  var [dishes, setDishes] = useState([]);
  const recipe = useSelector((state) => state.recipe);
  console.log(recipe);
  // async function fetchData() {
  //   var data = [];
  //   const db = getFirestore(app);
  //   const recipeData = await getDocs(collection(db, "recipe"));
  //   recipeData.forEach((doc) => {
  //     data.push(doc.data());
  //     // console.log(doc.data());
  //     setDishes(data);
  //   });
  // }

  // fetchData();

  useEffect(() => {
    // fetchData();
    dispatch(fetchRecipes());
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Loader />
      <div className="container-fluid">
        <Navbar />
      </div>
      <div className="container">
        <h1 className="text-center">Customise Your Menu</h1>
      </div>
      <div className="container">
        <div className="row">
          {recipe.recipes.map((item, index) => (
            <RecipeCard
              key={index}
              name={item.dish_name}
              type={item.dish_type}
              image={item.image}
            />
          ))}
          <div className="col-md-3">
            <div className="menu-card ">
              <div className="add-item ">
                <span>Add New Dish</span>

                <span onClick={handleShow}>
                  <CirclePlus size={30} />
                </span>
                <Modal
                  heading={"New Dish"}
                  handleClose={handleClose}
                  handleShow={handleShow}
                  show={show}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
