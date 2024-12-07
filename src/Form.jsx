import React from "react";

export default function Form() {
  function signup(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    let diet = formData.getAll("diet");
    let allData = { ...data, diet };
    console.log(allData);
    event.currentTarget.reset();
  }
  return (
    <>
      <h2 className="">Sign up now</h2>
      <form onSubmit={signup} method="POST">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <input
          type="radio"
          name="marital"
          id="marital"
          value="single"
          checked
        />
        <label htmlFor="marital">Single</label>
        <input type="radio" name="marital" id="marital" value="inlove" />
        <label htmlFor="marital">Inlove</label>
        <input type="radio" name="marital" id="marital" value="married" />
        <label htmlFor="marital">Married</label>

        <input type="checkbox" name="diet" id="diet" value="egg" />
        <label htmlFor="diet">Egg</label>
        <input type="checkbox" name="diet" id="diet" value="meat" />
        <label htmlFor="diet">Meat</label>
        <input
          type="checkbox"
          name="diet"
          id="diet"
          value="fish"
          defaultChecked={true}
        />
        <label htmlFor="diet">Fish</label>
        <div>
          <label htmlFor="dropdown">Select a country</label>
          <select name="country" id="dropdown" defaultValue="" required>
            <option value="" disabled>
              Chose a country
            </option>
            <option value="brazil">Brazil</option>
            <option value="naij">Naij</option>
            <option value="ghana">Ghana</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
