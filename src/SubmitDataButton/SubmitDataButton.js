import {submitData} from "../api/processApi";

const SubmitDataButton = (props) => {
  const {taskKey, inputData} = props;
  const processParams = {taskKey, inputData};
  const onClick = () => submitData(processParams);

  return <input type='button' value='Submit data' onClick={onClick}/>
}

export default SubmitDataButton