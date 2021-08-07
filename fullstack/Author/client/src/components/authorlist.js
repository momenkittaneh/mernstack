import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link , navigate} from '@reach/router';
import DeleteButton from './deletebutton';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  
export default props => {
    const [author,setauthor] = useState([])
    const classes = useStyles();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors')
        .then(res=>setauthor(res.data))},[])
        const removeFromDom = authorid =>{
            setauthor(author.filter(author =>author._id != authorid))}
    return (
        <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell>Action avaliable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {author.map((auth , idx) => {
                return(
                    // <tr>
                    // <div key={idx}>
                    // <td>
                    //         {auth.name}
                    // </td>
                    // <td>
                    //     <button onClick={(e) => navigate(`/author/${auth._id}/edit`)}>edit </button>
                    //     <DeleteButton authorid={auth._id} successCallback ={()=>removeFromDom(auth._id) } />
                    // </td>
                    // </div>
                    // </tr>
                    <TableRow key={idx}>
                    <TableCell component="th" scope="row">
                      {auth.name}
                    </TableCell>
                    <TableCell>
                    <button onClick={(e) => navigate(`/author/${auth._id}/edit`)}>edit </button>
                <DeleteButton authorid={auth._id} successCallback ={()=>removeFromDom(auth._id) } />
            </TableCell>
                  </TableRow>
                )})}
        </TableBody>
              </Table>
              </TableContainer>
          
        </div>
    )
}
