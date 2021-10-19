import React from "react";
import { IconButton } from "@material-ui/core";
import "./Styles/Programs.css";
import CalendarIcon from "../Icons/CalendarIcon";
const ProjectTitle = (props) => {
  return (
    <div className="ProgramTitle">
      <p style={{ color: "#ffffff", fontSize: "18px", fontWeight: "500" }}>
        {props.title}
      </p>
      {props.secItem ? (
        props.secItem
      ) : (
        <IconButton>
          <CalendarIcon />
        </IconButton>
      )}
    </div>
  );
};
export default ProjectTitle;
