import React from "react";
import Ingredient from "./ingrdient";
import HFrecipe from "./HFrecipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  // Update the getRecipe function to make an HTTP request to the serverless function
  async function getRecipe() {
    try {
      // Sending a POST request to the serverless function endpoint
      const response = await fetch("/.netlify/functions/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients }), // Sending the ingredients as part of the request body
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch recipe");
      }

      const data = await response.json();
      setRecipe(data.recipe); // Set the recipe from the serverless function's response
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const ingredientListElement = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
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
        <Ingredient ingr={ingredientListElement} click={getRecipe} />
      ) : null}

      {recipe && <HFrecipe recipe={recipe} />}
    </>
  );
}
