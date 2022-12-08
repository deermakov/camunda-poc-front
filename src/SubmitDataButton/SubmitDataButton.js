import {submitData} from "../api/processApi";

const SubmitDataButton = (props) => {
  const {taskKey, inputData, clickHandler} = props;
  const processParams = {taskKey, inputData};
  const onClick = () => {submitData(processParams); clickHandler();}

  return <input type='button' value='Submit data' onClick={onClick}/>
}

export default SubmitDataButton