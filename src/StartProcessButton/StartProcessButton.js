import React from "react";
import startProcess from "../api/processApi";

const StartProcessButton = (props) => {
  const {text, handleInput} = props;
  return <input type='button' value='Start process' onClick={startProcess}/>
}

export default StartProcessButton