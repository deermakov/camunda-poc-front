import React from "react";
import {terminate} from "../api/processApi";

const TerminateButton = (props) => {
  const {processId, clickHandler} = props;
  const processParams = {"processExternalId": processId};
  const onClick = () => {terminate(processParams); clickHandler();}
  return <input type='button' value='Terminate process' onClick={onClick}/>
}

export default TerminateButton