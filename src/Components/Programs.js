import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import "./Styles/Programs.css";
import PersonIcon from "../Icons/PersonIcon";
import Header from "./Header";
import ProjectTitle from "./ProjectTitle";
import AddButton from "./AddButton";
import AddProgramModal from "./AddProgramModal";
function Programs() {
  const [openModal, setOpenModal] = useState(false);
  const [openSecModal, setOpenSecModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSecModalToggle = () => {
    setOpenSecModal(!openSecModal);
  };
  return (
    <div className="Body">
      {/* header begin */}
      <Header />
      {/* header end */}
      {/* Project title start*/}
      <ProjectTitle title={"My Projects"} />
      {/* Project title end*/}
      {/* project list start */}
      <div className="ProgramList">
        <p className="ProgramText">Festival salsa</p>
        <p className="ProgramText">27/10/21</p>
      </div>
      <div className="ProgramList">
        <p className="ProgramText">Festival salsa</p>
        <p className="ProgramText">27/10/21</p>
      </div>
      <div className="ProgramList">
        <p className="ProgramText">Festival salsa</p>
        <p className="ProgramText">27/10/21</p>
      </div>
      {/* project list end */}
      {/* My team title start */}
      <div className="Team">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <p className="TeamText">Mon équipe</p>
      </div>
      {/* My team end */}
      {/* TeamLocationBox start */}
      <div className="LocationBox"></div>
      {/* TeamLocationBox end */}
      {/* Add button start */}

      <AddButton onClick={handleOpen} />
      {/* Add button end */}
      {/* add program modal  start*/}
      <AddProgramModal
        handleClose={handleClose}
        openModal={openModal}
        handleSecModalToggle={handleSecModalToggle}
        openSecModal={openSecModal}
      />
      {/* add program modal  end*/}
    </div>
  );
}

export default Programs;
