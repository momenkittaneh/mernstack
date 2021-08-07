import React,{useState,useEffect} from 'react'
import Playerheader from './Playerheader'
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Deletebutton from './Deletebutton'
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
  
const Playerlist = () => {
    const classes = useStyles();

    const [player,setplayer] = useState([])
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/player`)
        .then(res => setplayer(res.data))
        },[])
        const removeFromDom=playerid =>{
          setplayer(player.filter(player => player._id != playerid))
        }
    return (
        <div>
            <Playerheader />
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
          {player.map((row,idx) => {
            return(
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {row.Name}
              </StyledTableCell>
              <StyledTableCell>{row.Position}</StyledTableCell>
              <StyledTableCell>
                <Deletebutton playerID={row._id} successCallback={()=>removeFromDom(row._id) }/>
              </StyledTableCell>
            </StyledTableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Playerlist
