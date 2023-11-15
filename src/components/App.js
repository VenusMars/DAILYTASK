import React, { useState } from "react";
import "/public/styles.css";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Heading from "./Heading";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputValue) {
    setItems((prevValue) => {
      return [...prevValue, inputValue];
    });
  }

  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <Heading header="To-Do List" />
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((itemValue, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={itemValue}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
