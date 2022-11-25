import React from "react";
import {terminate} from "../api/processApi";

const TerminateButton = (props) => {
  const {processId} = props;
  const processParams = {processId};
  const onClick = () => terminate(processParams);
  return <input type='button' value='Terminate process' onClick={onClick}/>
}

export default TerminateButton