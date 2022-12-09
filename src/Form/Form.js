import React, {useState} from "react";
import StartProcess from "../StartProcess/StartProcess";
import GetTaskListButton from "../TaskList/GetTaskListButton";
import TaskListTable from "../TaskList/TaskListTable";
import ReactBpmnViewer from "../BpmnView/ReactBpmnViewer";
import CamundaBpmnViewer from "../BpmnView/CamundaBpmnViewer";

export const TaskListContext = React.createContext();

const Form = (props) => {
  const {initialText} = props;
  const [taskListRows, setTaskListRows] = useState([]);

  return (
    <div>
      <TaskListContext.Provider value={[taskListRows, setTaskListRows]}>
        <form>
          <StartProcess startParam={initialText} />
          <GetTaskListButton assignee = "demo"/>
          <TaskListTable assignee = "demo" />
        </form>
      </TaskListContext.Provider>
      <ReactBpmnViewer/>
      <CamundaBpmnViewer/>
    </div>
  )
}

export default Form