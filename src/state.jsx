import React from "react";
export default function state() {
  const [count, setcount] = React.useState(0);
  function add(event) {
    event.preventDefault();
    setcount((prevcount) => prevcount + 1);
  }
  function minus(event) {
    event.preventDefault();
    setcount((prevcount) => prevcount - 1);
  }

  return (
    <>
      <div className="counter">
        <button className="plus" type="button" onClick={add}>
          +
        </button>
        <h2 className="count">{count}</h2>
        <button className="minus" type="button" onClick={minus}>
          -
        </button>
      </div>
    </>
  );
}
