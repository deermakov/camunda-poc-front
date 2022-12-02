import React, {useState} from "react";
import SubmitDataButton from "../SubmitDataButton/SubmitDataButton";
import TerminateButton from "../TerminateButton/TerminateButton";
import Input from "../Input/Input";

const TaskActions = (props) => {
  const {processId, taskKey} = props;
  const [text, setText] = useState(null);
  const handleInput = (event) => setText(event.target.value);
  return (
    <div>
      <Input text={text} handleInput={handleInput}/>
      <SubmitDataButton taskKey={taskKey} inputData={text}/>
      <TerminateButton processId={processId} />
    </div>
  )
}

export default TaskActions