import React, {useState} from "react";
import {getTaskList} from "../api/processApi";
import TaskListTable from "./TaskListTable";

const GetTaskListButton = (props) => {
  const {assignee} = props;
  const [taskList, setTaskList] = useState([]);
  const onClick = () => getTaskList(assignee, setTaskList);
  return (
    <div>
      <input type='button' value='Get TaskList' onClick={onClick}/>
      <TaskListTable rows={taskList} />
    </div>
  )
}

export default GetTaskListButton