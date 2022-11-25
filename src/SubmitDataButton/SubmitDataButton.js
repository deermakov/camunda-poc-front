import React from "react";
import {submitData} from "../api/processApi";

const SubmitDataButton = (props) => {
  const {processId, inputData} = props;
  const processParams = {processId, inputData};
  const onClick = () => submitData(processParams);
  return <input type='button' value='Submit data' onClick={onClick}/>
}

export default SubmitDataButton