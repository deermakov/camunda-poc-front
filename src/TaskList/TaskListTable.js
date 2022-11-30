import {TableContainer} from "@mui/material";
import {Table} from "@mui/material";
import {TableHead} from "@mui/material";
import {TableRow} from "@mui/material";
import {TableCell} from "@mui/material";
import {Paper} from "@mui/material";
import {TableBody} from "@mui/material";

const TaskListTable = (props) => {
  const {rows} = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Process instance key</TableCell>
            <TableCell>Process external id</TableCell>
            <TableCell align="right">Job key</TableCell>
            <TableCell align="right">Process step id</TableCell>
            <TableCell align="right">Assignee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.value.processInstanceKey}
              </TableCell>
              <TableCell align="right">...todo...</TableCell>
              <TableCell align="right">{row.key}</TableCell>
              <TableCell align="right">{row.value.elementId}</TableCell>
              <TableCell align="right">{row.value.customHeaders["io.camunda.zeebe:assignee"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskListTable