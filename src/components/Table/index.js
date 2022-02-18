import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Pagination } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.main,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.primary.light,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomizedTables({heads, rows, max}) {
    const [page, setPage] = React.useState(1)
  return (
    <Box sx={{
        width: '97%',
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    }}>
        <Pagination count={Math.ceil(rows.length / max)} variant='outlined' shape="rounded" sx={{marginBottom: '10px'}}
    page={page} onChange={(e, v) => setPage(v)}
    color="primary"
    />
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
              {
                heads.map((head, index) => 
                    <StyledTableCell key={index}>{head}</StyledTableCell>
                )
              }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => Math.ceil((index + 1) / max) === page && (
            <StyledTableRow key={index}>
                {
                    heads.map((head, index) =>
                        <StyledTableCell key={index}>{row[head]}</StyledTableCell>
                    )
                }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </Box>
  );
}
