import React, {useContext} from "react";
import {getTaskList} from "../api/processApi";
import {TaskListContext} from "../Form/Form";

const GetTaskListButton = (props) => {
  const {assignee} = props;
  const [taskListRows, setTaskListRows] = useContext(TaskListContext);
  const onClick = () => getTaskList(assignee, setTaskListRows);

  return (
    <div>
      <input type='button' value='Get TaskList' onClick={onClick}/>
    </div>
  )
}

export default GetTaskListButton