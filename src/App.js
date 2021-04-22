import React, { useState, useRef } from "react";
import "./styles.css";
import {
  Button,
  TextField
} from "@material-ui/core";
import format from "./format";
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

export default function App() {
  const [myName, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
    setCopied(false);
  };
  const name = myName;

  const script = format({
    Name: name
  });

  /**Checkboxes */
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));
  
  
    const classes = useStyles();
    const [state, setState] = React.useState({
      gilad: true,
      jason: false,
      antoine: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

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
          helperText="Enter Name"
          label="Attendant Phone Number"
          margin="normal"
          placeholder="Your name"
          variant="outlined"
          onChange={handleName}
        />
        <h3>Patient Info</h3>
        <TextField
          fullWidth
          helperText="Enter Name"
          label="Patient Name"
          margin="normal"
          placeholder="Your name"
          variant="outlined"
          onChange={handleName}
        />
        <TextField
          fullWidth
          helperText="Enter Name"
          label="Patient Age"
          margin="normal"
          placeholder="Your name"
          variant="outlined"
          onChange={handleName}
        />
        <TextField
          fullWidth
          label="Location"
          margin="normal"
          placeholder="Location"
          variant="outlined"
          onChange={handleName}
        />
        <h3>Request Info</h3>
        <section name="Request Info">
        <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
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
