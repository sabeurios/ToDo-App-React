import React from "react";
const Input = ({ name, value, handleChange, handleAddItem }) => {
  
  return (
    <form className="form">
      <input
        name={name}
        id="inputItem"
        type="text"
        placeholder="Enter new task"
        value={value}
        onChange={handleChange}
      />
      <button type="button" className="btn-add" onClick={handleAddItem}>
        Add
      </button>
    </form>
  );
};
export default Input;
