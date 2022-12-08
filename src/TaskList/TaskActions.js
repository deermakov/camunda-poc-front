import React, {useState} from "react";
import SubmitDataButton from "../SubmitDataButton/SubmitDataButton";
import TerminateButton from "../TerminateButton/TerminateButton";
import Input from "../Input/Input";

const TaskActions = (props) => {
  const {processId, taskKey} = props;
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState("");
  const handleInput = (event) => setText(event.target.value);
  const clickHandler = () => setDisabled(true);

  if (!disabled)
    return (
      <div>
        <Input text={text} handleInput={handleInput}/>
        <SubmitDataButton taskKey={taskKey} inputData={text} clickHandler={clickHandler} />
        <TerminateButton processId={processId} clickHandler={clickHandler} />
      </div>
  )
}

export default TaskActions