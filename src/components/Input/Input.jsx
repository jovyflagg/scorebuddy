import React from "react";



const Input = ({ name, handleInputChange }) => {
  return (
   
        <input type="text" value={name} onChange={handleInputChange} />
   
  );
};

export default Input;
