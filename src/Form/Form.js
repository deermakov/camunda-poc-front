import {useState} from "react";
import StartProcess from "../StartProcess/StartProcess";
import GetTaskListButton from "../TaskList/GetTaskListButton";

const Form = (props) => {
  const {initialText} = props;

  return (
    <form>
      <StartProcess startParam={initialText} />
      <GetTaskListButton assignee = "demo"/>
    </form>
  )
}

export default Form