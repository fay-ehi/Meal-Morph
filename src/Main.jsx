import React from "react";
import Ingredient from "./ingrdient";
import Recipe from "./recipe";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "rice",
    "beans",
    "vegetable",
  ]);

  const ingredientListElement = ingredients.map((ingredient) => (
    <li>{ingredient}</li>
  ));
  function PopUp(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredients = formData.get("ingredient");
    event.currentTarget.reset();
    if (newIngredients.length > 0) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
    }
  }
  const [recipeShown, setrecipeShown] = React.useState(false);
  function showRecipe(event) {
    event.preventDefault();
    setrecipeShown((prevShow) => !prevShow);
  }

  return (
    <>
      <form onSubmit={PopUp}>
        <input
          className="textBox"
          type="text"
          placeholder="eg. Yam..."
          name="ingredient"
        />
        <button className="submitButton">+ Add Ingredients</button>
      </form>
      {ingredients.length > 0 ? (
        <Ingredient ingr={ingredientListElement} click={showRecipe} />
      ) : null}

      {recipeShown && <Recipe />}
    </>
  );
}
