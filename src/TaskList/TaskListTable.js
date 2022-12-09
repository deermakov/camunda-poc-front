import {TableContainer} from "@mui/material";
import {Table} from "@mui/material";
import {TableHead} from "@mui/material";
import {TableRow} from "@mui/material";
import {TableCell} from "@mui/material";
import {Paper} from "@mui/material";
import {TableBody} from "@mui/material";
import TaskActions from "./TaskActions";
import {useContext, useEffect} from "react";
import {TaskListContext} from "../Form/Form";
import {getTaskList} from "../api/processApi";

const TaskListTable = (props) => {
  const {assignee} = props;
  const [taskListRows, setTaskListRows] = useContext(TaskListContext);

  // Однократная загрузка tasklist'а при отрисовке таблицы
  useEffect( () => {
    async function fetchData(){
      await getTaskList(assignee, setTaskListRows);
    }
    fetchData();
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Process instance key</TableCell>
            <TableCell>Process external id</TableCell>
            <TableCell>User job key</TableCell>
            <TableCell>Process element id</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskListRows.map((row) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.process.processInstanceKey}
              </TableCell>
              <TableCell>{row.process.processExternalId}</TableCell>
              <TableCell>{row.key}</TableCell>
              <TableCell>{row.elementId}</TableCell>
              <TableCell>{row.assignee}</TableCell>
              <TableCell><TaskActions processId={row.process.processExternalId} taskKey={row.key}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskListTable