import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import "./Styles/Programs.css";
import PersonIcon from "../Icons/PersonIcon";
import Header from "./Header";
import ProjectTitle from "./ProjectTitle";
import AddButton from "./AddButton";
import AddProgramModal from "./AddProgramModal";
import generateRandomNumber from "../Utils/GenerateRandomNumber";

function Programs() {
  const [openModal, setOpenModal] = useState(false);
  const [openSecModal, setOpenSecModal] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [currentProgram, setCurrentProgram] = useState({
    GUID: generateRandomNumber(),
    Program_ID: generateRandomNumber(),
    ProgramLink_ID: generateRandomNumber(),
    Start_Date: "27/10/21",
    Theme: "",
    Description: "Festival salsa",
    Location: "",
    Image: "",
    Facebook: "",
    isEdit: true,
  });
  const handleOpen = () => {
    setOpenModal(true);
    addProgram();
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSecModalToggle = (program) => {
    setCurrentProgram(program);
    setOpenSecModal(!openSecModal);
  };

  const addProgram = () => {
    const program = {
      GUID: generateRandomNumber(),
      Program_ID: generateRandomNumber(),
      ProgramLink_ID: generateRandomNumber(),
      Start_Date: "27/10/21",
      Theme: "",
      Description: "",
      Location: "",
      Image: "",
      Facebook: "",
      isEdit: true,
    };
    const exist_Program = [...programs];
    exist_Program.push(program);
    setPrograms(exist_Program);
  };

  const handleChangeProgram = (id, e, fieldName) => {
    const value = e.target.value;
    const exist_Program = [...programs];
    exist_Program[id][fieldName] = value;
    setPrograms(exist_Program);
  };

  useEffect(() => {
    let programsList = JSON.parse(localStorage.getItem("programs"));
    if (programsList) {
      setPrograms(programsList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("programs", JSON.stringify(programs));
  }, [programs]);

  return (
    <div className="Body">
      {/* header begin */}
      <Header />
      {/* header end */}
      {/* Project title start*/}
      <ProjectTitle title={"My Projects"} />
      {/* Project title end*/}
      {/* project list start */}
      <div style={{ height: "100vh" }}>
        <div
          style={{
            height: "20vh",
            overflowY: "scroll",
            //   position: "relative",
            // height: "auto",
          }}
        >
          {programs &&
            programs.map((program, idx) => {
              return (
                <div
                  className="ProgramList"
                  onClick={() => handleSecModalToggle(program)}
                >
                  <p className="ProgramText">{program.Description}</p>
                  <p className="ProgramText">{program.Start_Date}</p>
                </div>
              );
            })}
        </div>
        {/* project list end */}
        {/* My team title start */}
        <div
          style={{
            position: "fixed",
            bottom: 10,
            left: "20px",
            right: "20px",
            // height: "20%",
          }}
        >
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
        </div>
      </div>
      {/* Add button end */}
      {/* add program modal  start*/}
      <AddProgramModal
        handleClose={handleClose}
        openModal={openModal}
        handleSecModalToggle={handleSecModalToggle}
        openSecModal={openSecModal}
        programs={programs}
        setPrograms={setPrograms}
        addProgram={addProgram}
        handleChangeProgram={handleChangeProgram}
        currentProgram={currentProgram}
      />
      {/* add program modal  end*/}
    </div>
  );
}

export default Programs;
