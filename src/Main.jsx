import React from "react";
import Ingredient from "./ingrdient";
import Recipe from "./recipe";
import getRecipeFromMistral from "./ai";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "rice",
    "beans",
    "vegetable",
  ]);

  const [aiRecipe, setaiRecipe] = React.useEffect(getRecipeFromMistral);
  const ingredientArr = aiRecipe.map((ingr) => (
    <getRecipeFromMistral ingredientsArr={ingr.ingredients} />
  ));

  const [recipeShown, setrecipeShown] = React.useState(false);

  function showRecipe(event) {
    event.preventDefault();

    setaiRecipe(getRecipeFromMistral);

    setrecipeShown((prevShow) => !prevShow);
  }

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

      {recipeShown && { ingredientArr }}
    </>
  );
}
