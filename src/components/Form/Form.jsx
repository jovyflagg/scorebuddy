import React from "react";
import Input from "../Input/Input";
import GameButton from "../Button/GameButton";
import styles from "./form.module.css"


const Form = ({name, handleInputChange, handleClick, buttonName}) => {
  return (
    <div className={styles.buttonContainer}>
      <Input name={name} handleInputChange={handleInputChange}/>
      <GameButton buttonName={buttonName} handleClick={handleClick}/>
    </div>
  );
};

export default Form;
