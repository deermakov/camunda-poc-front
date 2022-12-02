import React, {useState} from "react";
import SubmitDataButton from "../SubmitDataButton/SubmitDataButton";
import TerminateButton from "../TerminateButton/TerminateButton";
import Input from "../Input/Input";

const TaskActions = (props) => {
  const {processId} = props;
  const [text, setText] = useState(null);
  const handleInput = (event) => setText(event.target.value);
  return (
    <div>
      <Input text={text} handleInput={handleInput}/>
      <SubmitDataButton processId={processId} inputData={text}/>
      <TerminateButton processId={processId} />
    </div>
  )
}

export default TaskActions