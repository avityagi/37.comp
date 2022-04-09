import React, { useState } from "react";

function App() {
  // const [fname, setFName] = useState("");
  // const [lname, setLName] = useState("");

  const [name, setName] = useState({ fname: "", lname: "" });

  // const [headingText, setHeading] = useState("");
  // function fnameChange(event) {
  //   setFName(event.target.value);
  // }
  // function lnameChange(event) {
  //   setLName(event.target.value);
  // }
  function handleChange(event) {
    let value = event.target.value;
    // console.log(event.target.name);
    if (event.target.name === "fName")
      setName({ fname: value, lname: name.lname });
    else if (event.target.name === "lName")
      setName({ fname: name.fname, lname: value });
    // console.log(name);
  }
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello{" " + name.fname + " " + name.lname}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          value={name.fname}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={name.lname}
          name="lName"
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
