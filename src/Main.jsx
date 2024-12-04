export default function Main() {
  const ingredients = ["Pepper", "Onion", "Salt"];
  const ingredientList = ingredients.map((ingredient) => <li>{ingredient}</li>);
  function PopUp(event) {
    event.preventDefault();
    alert("submitted");
    let formData = new FormData(event.currentTarget);
    let newIngredients = formData.get("ingredient");
    ingredients.push(newIngredients);

    alert(ingredients);
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

      <ul>{ingredientList}</ul>
    </>
  );
}
