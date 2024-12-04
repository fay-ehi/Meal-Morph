import React from "react";
export default function Tenerary() {
  const [things, setThings] = React.useState([]);
  const allThings = ["💗", "🌤️", "👩‍💻", "🌧️", "💡", "🍊", "🥵"];
  const thingsElement = things.map((thing) => <li key={thing}> {thing} </li>);
  function displayThings(event) {
    event.preventDefault();
    setThings((prevThings) => [...prevThings, allThings[prevThings.length]]);
  }

  return (
    <>
      <button className="submitButton" type="button" onClick={displayThings}>
        Add Items
      </button>
      <ul>{thingsElement}</ul>
    </>
  );
}
