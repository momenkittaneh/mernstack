import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Gameheader from './Gameheader'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Deletebutton from './Deletebutton'
import Gamebuttons from './Gamebuttons';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


export default props => {
  const classes = useStyles();

    const {player,setPlayer,gameID} =props
    useEffect(() => {
      axios.get(`http://localhost:8000/api/player`)
      .then(res => setPlayer(res.data));
  }, [])
return (
  <>
            <h1>Player Status - Game {gameID}</h1>
            <Gameheader />
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Player Name</StyledTableCell>
            <StyledTableCell>Prefered Possition</StyledTableCell>
            <StyledTableCell>action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {player.map((row,idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell>
                  <Gamebuttons />
              </StyledTableCell>
              <StyledTableCell>
                <Deletebutton />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

</>
    )

}

