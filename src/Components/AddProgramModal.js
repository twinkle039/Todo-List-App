import React from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import "./Styles/Programs.css";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "../Icons/CloseIcon";
import BackIcon from "../Icons/BackIcon";
import ProjectTitle from "./ProjectTitle";
import AddButton from "./AddButton";
const AddProgramModal = (props) => {
  const { handleClose, openModal, handleSecModalToggle, openSecModal } = props;
  return (
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
        <div className="ProgramList" onClick={handleSecModalToggle}>
          <p className="ProgramText">Festival salsa</p>
          <p className="ProgramText">27/10/21</p>
        </div>
        {/* create new project button  */}
        <div className="AddButtonContainer">
          <Button variant="contained" color="secondary">
            Créer
          </Button>
        </div>
        {/* create new project button  */}
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

                <h2>CULTE 11/09/21</h2>
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
                  Duration
                </p>
              }
            />

            {/* grid+++ */}
            <Grid
              container
              spacing={1}
              justifyContent="center"
              style={{ padding: "10px", height: "55%" }}
            >
              <Grid item xs={1}>
                <div className="Paper">1</div>
              </Grid>
              <Grid item xs={1}>
                <div className="Paper">1</div>
              </Grid>
              <Grid item xs={5}>
                <div className="Paper">1</div>
              </Grid>
              <Grid item xs={4}>
                <div className="Paper">1</div>
              </Grid>
              <Grid item xs={1}>
                <div className="Paper">1</div>
              </Grid>
            </Grid>
            {/* grid--- */}
            <AddButton />
          </div>
        </Modal>
      </div>
    </Modal>
  );
};
export default AddProgramModal;
