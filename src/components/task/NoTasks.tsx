import { Table, TableBody, TableCell, TableRow } from '@mui/material';

const NoTasks = () => (
  <Table>
    <TableBody>
      <TableRow>
        <TableCell colSpan={2} className='flex justify-center p-5 w-full'>
          No tasks yet
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default NoTasks;
