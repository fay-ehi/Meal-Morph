import React from "react";
export default function Main() {
  const ingredientsList = ["Pepper", "Onion", "Salt"];
  const [ingredients, setIngredients] = React.useState(ingredientsList);

  const ingredientListElement = ingredients.map((ingredient) => (
    <li>{ingredient}</li>
  ));
  function PopUp(event) {
    event.preventDefault();
    setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
    let formData = new FormData(event.currentTarget);
    let newIngredients = formData.get("ingredient");
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

      <ul>{ingredientListElement}</ul>
    </>
  );
}
