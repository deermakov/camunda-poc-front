import React from "react";
import {getTaskList} from "../api/processApi";

const TaskListButton = (props) => {
  const {assignee} = props;
  const onClick = () => getTaskList(assignee);
  return <input type='button' value='Get TaskList' onClick={onClick}/>
}

export default TaskListButton