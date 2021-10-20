import React from "react";
import { IconButton } from "@material-ui/core";
import "./Styles/Programs.css";
import AddIcon from "../Icons/AddIcon";
const AddButton = (props) => {
  return (
    <div className="AddButtonContainer">
      <IconButton onClick={props.onClick ? props.onClick : () => {}}>
        <AddIcon />
      </IconButton>
    </div>
  );
};
export default AddButton;
