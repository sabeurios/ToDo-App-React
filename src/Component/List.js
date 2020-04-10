import React from "react";
import Item from "./Item"; 

const List = ({ items, handleCompleteOrUndo, handleDelete }) => {
    
  return (
    <div>
      {items.map((elt, index) => {
        return (
          <Item
            elt={elt}
            index={index}
            handleCompleteOrUndo={handleCompleteOrUndo}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};
export default List;
