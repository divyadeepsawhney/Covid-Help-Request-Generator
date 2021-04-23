import React, { useState, useRef } from "react";
import "./styles.css";
import { Button, TextField } from "@material-ui/core";
import format from "./format";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

export default function App() {
  //state to manage attendant Name
  const [myName, setMyName] = useState("");
  const handleName = (e) => {
    setMyName(e.target.value);
    setCopied(false);
  };
  //state to manage Attendant Phone Number
  const [phoneNum, setPhoneNum] = useState("");
  const handlePhone = (e) => {
    setPhoneNum(e.target.value);
    setCopied(false);
  };
  //state to manage Patient name
  const [patientName, setPatientName] = useState("");

  const handlePatientName = (e) => {
    setPatientName(e.target.value);
    setCopied(false);
  };

  //state to manage Patient age
  const [patientAge, setPatientAge] = useState("");

  const handlePatientAge = (e) => {
    setPatientAge(e.target.value);
    setCopied(false);
  };

  //state to manage Patient location
  const [patientLocation, setPatientLocation] = useState("");

  const handlePatientLocation = (e) => {
    setPatientLocation(e.target.value);
    setCopied(false);
  };

  /**Checkboxes */
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
    formControl: {
      margin: theme.spacing(3)
    }
  }));

  const classes = useStyles();
  const [state, setState] = React.useState({
    Bed: false,
    Oxygen: false,
    ICU: false,
    Plasma: false,
    Remdesivir: false,
    Favipiravir: false,
    Tocilizumab: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    Bed,
    Oxygen,
    ICU,
    Plasma,
    Remdesivir,
    Favipiravir,
    Tocilizumab
  } = state;

  const script = format({
    Name: myName,
    Phone: phoneNum,
    Patient_Name: patientName,
    Patient_Age: patientAge,
    Patient_Location: patientLocation,
    Requirement: state
  });
  /*Code for Copying */
  const [copied, setCopied] = useState(false);
  const textarea = useRef("");
  const copy = () => {
    textarea.current.select();
    document.execCommand("copy");
    setCopied(true);
  };

  /*Things To Display */
  return (
    <div className="App">
      <h1>Covid Help Request Generator</h1>
      <section style={{ maxWidth: 666 }}></section>
      <section>
        <h3>Attendant Info</h3>
        <TextField
          fullWidth
          helperText="Enter Name"
          label="Attendant Name"
          margin="normal"
          placeholder="Your name"
          variant="outlined"
          onChange={handleName}
        />
        <TextField
          fullWidth
          helperText="Enter Phone Number"
          label="Attendant Phone Number"
          margin="normal"
          placeholder="Your name"
          variant="outlined"
          onChange={handlePhone}
        />
        <h3>Patient Info</h3>
        <TextField
          fullWidth
          helperText="Enter Name"
          label="Patient Name"
          margin="normal"
          placeholder="Your name"
          variant="outlined"
          onChange={handlePatientName}
        />
        <TextField
          fullWidth
          helperText="Enter Age"
          label="Patient Age"
          margin="normal"
          placeholder="Your name"
          variant="outlined"
          onChange={handlePatientAge}
        />
        <TextField
          fullWidth
          helperText="Enter Location"
          label="Location"
          margin="normal"
          placeholder="Location"
          variant="outlined"
          onChange={handlePatientLocation}
        />
        <h3>Request Info</h3>
        <section name="Request Info">
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Bed}
                      onChange={handleChange}
                      name="Bed"
                    />
                  }
                  label="Bed"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Oxygen}
                      onChange={handleChange}
                      name="Oxygen"
                    />
                  }
                  label="Oxygen"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ICU}
                      onChange={handleChange}
                      name="ICU"
                    />
                  }
                  label="ICU"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Plasma}
                      onChange={handleChange}
                      name="Plasma"
                    />
                  }
                  label="Plasma"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Remdesivir}
                      onChange={handleChange}
                      name="Remdesivir"
                    />
                  }
                  label="Remdesivir"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Favipiravir}
                      onChange={handleChange}
                      name="Favipiravir"
                    />
                  }
                  label="Favipiravir"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Tocilizumab}
                      onChange={handleChange}
                      name="Tocilizumab"
                    />
                  }
                  label="Tocilizumab"
                />
              </FormGroup>
              <FormHelperText>Be careful</FormHelperText>
            </FormControl>
          </div>
        </section>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={copy}
        >
          {copied ? "Copied!" : "Copy the Request"}
        </Button>
        <TextField
          fullWidth
          margin="normal"
          rowsMax={5}
          multiline
          inputRef={textarea}
          value={script}
          variant="outlined"
        />
      </section>
    </div>
  );
}
