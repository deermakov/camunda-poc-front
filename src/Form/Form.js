import Input from "../Input/Input";
import Output from "../Output/Output";
import Logo from "../Logo/Logo";
import {useState} from "react";
import StartProcessButton from "../StartProcessButton/StartProcessButton";
import SubmitDataButton from "../SubmitDataButton/SubmitDataButton";

const Form = (props) => {
  const {initialText} = props;
  const [inputText, setInputText] = useState(initialText);
  const [processId, setProcessId] = useState(null);
  const handleInput = (event) => setInputText(event.target.value);
  const handleProcessStart = (processId) => setProcessId(processId);
  return (
    <form>
      <div>Введи 'logo' - появится logo</div>
      <Input text={inputText} handleInput={handleInput}/>
      <Output text={inputText}/>
      <Logo text={inputText}/>
      <StartProcessButton startParam={inputText} handleProcessStart={handleProcessStart}/>
      <Output text={processId}/>
      <SubmitDataButton processId={processId} inputData={inputText}/>
    </form>
  )
}

export default Form