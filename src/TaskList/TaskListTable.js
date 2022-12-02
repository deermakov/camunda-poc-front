import {TableContainer} from "@mui/material";
import {Table} from "@mui/material";
import {TableHead} from "@mui/material";
import {TableRow} from "@mui/material";
import {TableCell} from "@mui/material";
import {Paper} from "@mui/material";
import {TableBody} from "@mui/material";
import TaskActions from "./TaskActions";

const TaskListTable = (props) => {
  const {rows} = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Process instance key</TableCell>
            <TableCell>Process external id</TableCell>
            <TableCell>Job key</TableCell>
            <TableCell>Process step id</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
              <TableCell><TaskActions processId={row.process.processExternalId}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskListTable