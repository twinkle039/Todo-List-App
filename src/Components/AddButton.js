import React, { useState } from "react";
import { Button, Grid, IconButton, Paper, styled } from "@material-ui/core";
import "./Styles/Programs.css";
import CalendarIcon from "../Icons/CalendarIcon";
import PersonIcon from "../Icons/PersonIcon";
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
