import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevValues) => {
      return [...prevValues, inputText];
    });
    setInputText("");
    //prevValues receives the current value of items.
    //A new array is created using the spread operator (...prevValues) to copy the existing items.
    //The new inputText value is added to the end of this new array.
    //React then updates the items state with this new array.
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((tdItem) => {
            return <li>{tdItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
