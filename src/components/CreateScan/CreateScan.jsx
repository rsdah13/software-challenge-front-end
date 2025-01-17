import React from "react";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { getThemeColors } from "utils/color";

const colors = getThemeColors();

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: "none"
  }
}));

const CreateScan = ({
  open,
  createScan,
  handleInputChange,
  handleModalClose,
  handleModalOpen
}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  return (
    <div>
      <Button
        variant="contained"
        style={{ background: colors[2] }}
        onClick={open ? handleModalClose : handleModalOpen}
      >
        Create Scan
      </Button>
      <div>
        <Modal
          style={modalStyle}
          className={classes.paper}
          open={open}
          onClose={handleModalClose}
        >
          <form className={""} noValidate autoComplete="off">
            <TextField
              required
              id="name"
              label="Name (of Scan)"
              placeholder="Scan Title"
              className={""}
              margin="normal"
              onChange={handleInputChange}
            />

            <TextField
              required
              id="scannedByUserId"
              label="User Name"
              className={""}
              margin="normal"
              onChange={handleInputChange}
            />

            <TextField
              required
              id="elevationMax"
              label="Max Elevation"
              placeholder="8,848 m"
              className={""}
              margin="normal"
              onChange={handleInputChange}
            />
            <TextField
              required
              id="elevationMin"
              label="Min Elevation"
              placeholder="-10,994 m"
              className={""}
              margin="normal"
              onChange={handleInputChange}
            />
            <Button variant="contained" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={createScan}>
              Create
            </Button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default CreateScan;
