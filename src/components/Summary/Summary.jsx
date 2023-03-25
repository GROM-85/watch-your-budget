import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';

import { getExpensesMonthStats } from 'redux/transactions/trans-selectors';

const columns = [
  { id: 'month', minWidth: 107 },
  { id: 'total', minWidth: 107 },
];

export default function Summery() {
  const monthsStats = useSelector(getExpensesMonthStats);

  const arrayOfMonthsStats = Object.keys(monthsStats)
    .reverse()
    .map(key => ({
      month: key,
      total: monthsStats[key],
    }))
    .filter(el => el.total !== 'N/A');

  return (
    <Paper
      sx={{
        maxWidth: 230,
        minWidth: 214,
        maxHeight: 280,
        marginTop: '60px',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#F5F6FB',
      }}
    >
      <TableContainer>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={2}
                style={{
                  paddingTop: 12,
                  paddingBottom: 12,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: 1.17,
                  letterSpacing: '0.02em',
                  color: '#000000',
                  backgroundColor: '#F5F6FB',
                }}
              >
                SUMMERY
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arrayOfMonthsStats.map(row => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.month}
                  style={{
                    borderTop: '2px solid #FFFFFF',
                    borderBottom: '2px solid #FFFFFF',
                  }}
                >
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          paddingTop: 13,
                          paddingBottom: 13,
                          fontSize: '12px',
                          lineHeight: 1.17,
                          letterSpacing: '0.04em',
                          color: '#52555F',
                          backgroundColor: '#F5F6FB',
                        }}
                      >
                        {column.id === 'month' && value.toUpperCase()}
                        {column.id === 'total' && value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
