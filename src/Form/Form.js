import React, {useState} from "react";
import StartProcess from "../StartProcess/StartProcess";
import GetTaskListButton from "../TaskList/GetTaskListButton";
import TaskListTable from "../TaskList/TaskListTable";

export const TaskListContext = React.createContext();

const Form = (props) => {
  const {initialText} = props;
  const [taskListRows, setTaskListRows] = useState([]);

  return (
    <TaskListContext.Provider value={[taskListRows, setTaskListRows]}>
      <form>
        <StartProcess startParam={initialText} />
        <GetTaskListButton assignee = "demo"/>
        <TaskListTable />
      </form>
    </TaskListContext.Provider>
  )
}

export default Form