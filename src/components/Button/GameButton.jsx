import React from "react";
import Button from "@mui/material/Button";

const GameButton = ({ buttonName, handleClick }) => {
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        {buttonName}
      </Button>
    </div>
  );
};

export default GameButton;
