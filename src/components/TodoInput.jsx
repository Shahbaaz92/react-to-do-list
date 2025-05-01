import { useState } from "react";

export function TodoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          if (!inputValue) return;
          handleAddTodo(inputValue);
          setInputValue(" ");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
