import React from "react";
import startProcess from "../api/processApi";

const StartProcessButton = (props) => {
  const {startParam} = props;
  const processParams = {startParam};
  const onClick = () => startProcess(processParams);
  return <input type='button' value='Start process' onClick={onClick}/>
}

export default StartProcessButton