import Input from "../Input/Input";
import Output from "../Output/Output";
import {useState} from "react";

const Form = (props) => {
  const {initialText} = props;
  const [inputText, setInputText] = useState(initialText);
  const handleInput = (event) => setInputText(event.target.value);

  return (
    <form>
      <Input text={inputText} handleInput={handleInput}/>
      <Output text={inputText}/>
    </form>
  )
}

export default Form