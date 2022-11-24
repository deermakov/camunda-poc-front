import Input from "../Input/Input";
import Output from "../Output/Output";
import Logo from "../Logo/Logo";
import {useState} from "react";
import StartProcessButton from "../StartProcessButton/StartProcessButton";

const Form = (props) => {
  const {initialText} = props;
  const [inputText, setInputText] = useState(initialText);
  const handleInput = (event) => setInputText(event.target.value);

  return (
    <form>
      <div>Введи 'logo' - появится logo</div>
      <Input text={inputText} handleInput={handleInput}/>
      <Output text={inputText}/>
      <Logo text={inputText}/>
      <StartProcessButton/>
    </form>
  )
}

export default Form