export default function Ingredient(props) {
  return (
    <section>
      <h2 className="subTitle">Ingredients at hand:</h2>
      <ul className="ingredientList">{props.ingr}</ul>;
      {props.ingr.length >= 3 ? (
        <div className="getRecipeContainer">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Morph your meal from your list of ingredients.</p>
          </div>
          <button className="recipeButton" onClick={props.click}>
            Get a Recipe
          </button>
        </div>
      ) : null}
    </section>
  );
}
//   <ul className="ingredientList">{props.ingr}</ul>;
