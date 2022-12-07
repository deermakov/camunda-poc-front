import {useState} from "react";
import {startProcess} from "../api/processApi";
import Input from "../Input/Input";
import Output from "../Output/Output";

const StartProcess = (props) => {
  const {startParam} = props;
  const [text, setText] = useState(startParam);
  const [processId, setProcessId] = useState(null);

  const handleInput = (event) => setText(event.target.value);

  const processParams = {"startParam": text};
  const handleProcessStart = (processId) => setProcessId(processId);
  const onClick = () => startProcess(processParams, handleProcessStart);

  return (
    <div style={{whiteSpace: "nowrap"}}>
      Initial text
      <Input text={text} handleInput={handleInput}/>
      <input type='button' value='Start process' onClick={onClick}/>
      <Output text={processId}/>
    </div>
  )
}

export default StartProcess