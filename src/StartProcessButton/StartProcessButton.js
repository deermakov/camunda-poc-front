import React from "react";
import {startProcess} from "../api/processApi";

const StartProcessButton = (props) => {
  const {startParam, handleProcessStart} = props;
  const processParams = {startParam};
  const onClick = () => startProcess(processParams, handleProcessStart);
  return <input type='button' value='Start process' onClick={onClick}/>
}

export default StartProcessButton