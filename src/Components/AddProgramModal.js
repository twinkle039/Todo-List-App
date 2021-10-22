import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import "./Styles/Programs.css";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "../Icons/CloseIcon";
import BackIcon from "../Icons/BackIcon";
import ProjectTitle from "./ProjectTitle";
import AddButton from "./AddButton";
import generateRandomNumber from "../Utils/GenerateRandomNumber";
const AddProgramModal = (props) => {
  const {
    handleClose,
    openModal,
    handleSecModalToggle,
    openSecModal,
    programs,
    setPrograms,
    addProgram,
    handleChangeProgram,
    currentProgram,
  } = props;

  const [activities, setActivities] = useState([]);
  const AddActivity = () => {
    const activity = {
      id: generateRandomNumber(),
      Program_ID: currentProgram.Program_ID,
      Activty_ID: generateRandomNumber(),
      Order: 1,
      Duration: null,
      Activity_Type: {
        GUID: generateRandomNumber(),
        id: generateRandomNumber(),
        description: "",
        color: "green",
      },
      Description: "",
      Performer: "",
      Observations: "",
      References: "",
      Checked: false,
    };
    const ex_activities = [...activities];
    ex_activities.push(activity);
    setActivities(ex_activities);
  };

  const handleChange = (id, e, fieldName) => {
    const value = fieldName === "Checked" ? e.target.checked : e.target.value;
    const ex_activities = [...activities];
    ex_activities[id][fieldName] = value;
    setActivities(ex_activities);
  };
  const onKeyPress = (e, id) => {
    // setEditDescription(!editDescription);
    if (e.key === "Enter") {
      const exist_Program = [...programs];
      exist_Program[id].isEdit = !exist_Program[id].isEdit;
      setPrograms(exist_Program);
    }
  };

  useEffect(() => {
    let activitiesList = JSON.parse(localStorage.getItem("activities"));
    if (activitiesList) {
      setActivities(activitiesList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  return (
    <>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openModal}
        onClose={handleClose}
      >
        <div className="Modal">
          <div className="Header">
            <div className="ModalTitle">
              <div>
                <IconButton className="ModalClose" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </div>
              <h2>Création de projet</h2>
            </div>
          </div>
          {/* Project title start*/}
          <ProjectTitle title={"Title"} />
          {/* Project title end*/}
          <div
            style={{
              height: "55%",
              overflowY: "scroll",
            }}
          >
            {programs &&
              programs.map((program, idx) => {
                return !program.isEdit ? (
                  <div
                    className="ProgramList"
                    onClick={() => handleSecModalToggle(program)}
                    onDoubleClick={() => {
                      const exist_Program = [...programs];
                      exist_Program[idx].isEdit = !exist_Program[idx].isEdit;
                      setPrograms(exist_Program);
                    }}
                  >
                    <p className="ProgramText">{program.Description}</p>
                    <p className="ProgramText">{program.Start_Date}</p>
                  </div>
                ) : (
                  <div className="ProgramList">
                    <input
                      type="text"
                      name="Description"
                      onChange={(e) =>
                        handleChangeProgram(idx, e, "Description")
                      }
                      value={program.Description}
                      className="ProgramText"
                      onKeyPress={(e) => {
                        onKeyPress(e, idx);
                      }}
                      contentEditable={program.isEdit}
                      autoFocus={true}
                    />
                    <input
                      type="datetime-local"
                      name="Start_Date"
                      onChange={(e) =>
                        handleChangeProgram(idx, e, "Start_Date")
                      }
                      value={program.Start_Date}
                      className="ProgramText"
                      onKeyPress={(e) => {
                        onKeyPress(e, idx);
                      }}
                      contentEditable={program.isEdit}
                      //   autoFocus={true}
                    />
                  </div>
                );
              })}
          </div>

          {/* create new project button  */}
          <div className="AddButtonContainer">
            <Button variant="contained" color="secondary" onClick={addProgram}>
              Create
            </Button>
          </div>
          {/* create new project button  */}
        </div>
      </Modal>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openSecModal}
        onClose={handleSecModalToggle}
      >
        <div className="Modal">
          {/* header */}
          <div className="Header">
            <div className="ModalHeader">
              <IconButton onClick={handleSecModalToggle}>
                <BackIcon />
              </IconButton>

              <h2>
                {currentProgram.Description + " " + currentProgram.Start_Date}
              </h2>
              <div></div>
            </div>
          </div>
          {/* - header */}

          <ProjectTitle
            title={"Duration"}
            secItem={
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                {activities.length > 0 && "Start: 9h00"}
              </p>
            }
          />
          <div
            style={{
              height: "55%",
              overflowY: "scroll",
              margin: "0px 5px 0px 10px",
              // width: "95%",
            }}
          >
            {/* grid+++ */}
            {activities &&
              activities.map((activity, idx) => {
                return activity.Program_ID == currentProgram.Program_ID ? (
                  <Grid container spacing={2} xs={12} sm={12}>
                    <Grid item xs sm className="Paper">
                      <input
                        type="text"
                        //   onChange={e => handleChange(idx, e)}
                        value={activity.Order}
                        //   disabled={true}
                        className="gridInput"
                      />
                    </Grid>
                    <Grid item xs sm className="Paper">
                      <input
                        type="number"
                        onChange={(e) => handleChange(idx, e, "Duration")}
                        value={activity.Duration}
                        className="gridInput"
                      />
                    </Grid>
                    <Grid item xs={5} sm={5} className="Paper">
                      <input
                        type="text"
                        onChange={(e) => handleChange(idx, e, "Description")}
                        value={activity.Description}
                        className="gridInput"
                      />
                    </Grid>
                    <Grid item xs={4} sm={4} className="Paper">
                      <input
                        type="text"
                        onChange={(e) => handleChange(idx, e, "Performer")}
                        value={activity.Performer}
                        className="gridInput"
                      />
                    </Grid>
                    <Grid item xs sm className="Paper">
                      <div
                        style={
                          {
                            // backgroundColor: "#00bd13",
                          }
                        }
                      >
                        <input
                          type="text"
                          checked={activity.Checked}
                          value={""}
                          className="gridInput"
                          onChange={(e) => handleChange(idx, e, "Checked")}
                        />
                      </div>
                    </Grid>
                  </Grid>
                ) : null;
              })}
            {/* grid--- */}
          </div>
          <AddButton onClick={AddActivity} />
        </div>
      </Modal>
    </>
  );
};
export default AddProgramModal;
