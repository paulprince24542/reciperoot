import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../../config/firebase";

export default function modal({ show, handleClose, handleShow }) {
  const db = getFirestore(app);

  const [recipeName, setRecipeName] = useState("");
  const [recipeDesc, setRecipeDesc] = useState("");
  const [recipeType, setRecipeType] = useState("");
  const [ingridientValues, setIngridientValues] = useState([
    { quantity: "", ingridient: "" },
  ]);
  const addRecipe = async (event) => {
    console.log("Rcipe");
    console.log(recipeName, recipeDesc);
    console.log(ingridientValues);
    console.log(recipeType);
    try {
      const newRecipe = await addDoc(collection(db, "recipe"), {
        dish_name: recipeName,
        dish_description: recipeDesc,
        dish_ingredient: ingridientValues,
        dish_type: recipeType,
      });
      console.log("Recipe Added", newRecipe.id);
      if (newRecipe.id) {
        handleClose();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addFormFields = () => {
    setIngridientValues([
      ...ingridientValues,
      {
        quantity: "",
        ingridient: "",
      },
    ]);
  };

  const deleteFormFiled = (i) => {
    let newFormValues = [...ingridientValues];
    newFormValues.splice(i, 1);
    setIngridientValues(newFormValues);
  };

  let handleChange = (i, event) => {
    let newFormValues = [...ingridientValues];
    newFormValues[i][event.target.name] = event.target.value;
    setIngridientValues(newFormValues);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Dish Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              plaeholder="name@example.com"
              onChange={(event) => {
                setRecipeName(event.target.value);
              }}
            />
          </div>
          <Form.Select
            onChange={(event) => {
              console.log(event.target.value);
              setRecipeType(event.target.value);
            }}
          >
            <option>Veg</option>
            <option>Non Veg</option>
            <option>Desert</option>
          </Form.Select>
          <br />
          <div className="mb-3">
            <label htmlFor="Ingridients">Ingridients</label>
            {ingridientValues.map((element, index) => (
              <div className="input-group mt-2" key={index}>
                <input
                  type="text"
                  name="quantity"
                  className="form-control w-40"
                  placeholder="quantity"
                  aria-label="quantity"
                  onChange={(e) => handleChange(index, e)}
                />
                {/* <span className="input-group-text">@</span> */}
                <input
                  type="text"
                  className="form-control w-40"
                  name="ingridient"
                  placeholder="Ingrident"
                  aria-label="Ingrident"
                  onChange={(e) => handleChange(index, e)}
                />
                <div
                  className="btn btn-danger w-10"
                  onClick={() => {
                    deleteFormFiled(index);
                  }}
                >
                  Remove
                </div>
              </div>
            ))}
          </div>
          <div className="mb-3">
            <div
              className="btn btn-primary"
              onClick={() => {
                addFormFields();
              }}
            >
              Add Item
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => {
                setRecipeDesc(event.target.value);
              }}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addRecipe();
            }}
          >
            Add Recipe
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
