import React from "react";
import { IconButton } from "@material-ui/core";
import "./Styles/Programs.css";
import DrawerIcon from "../Icons/DrawerIcon";
const Header = () => {
  return (
    <div className="Header">
      <div className="DrawerIcon">
        <IconButton>
          <DrawerIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default Header;
