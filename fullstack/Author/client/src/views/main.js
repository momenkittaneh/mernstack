import React,{useState,useEffect} from 'react'
import Authorlist from '../components/authorlist'
import Authorform from '../components/authorform'
import axios from 'axios'
import { Link } from '@reach/router'

export default() => {
    const [author,setauthor]=useState([])
    const createauthor = auth =>{
        axios.post(`http://localhost:8000/api/authors`, auth )
        .then(
            res =>{setauthor([...author,res.data])})}
    return (
        <div>
            <h1>Faviourte Author</h1>
            <Link to='/new'>add an author</Link>
            <h3>we have qouts by:</h3>
            <Authorlist />
        </div>
    )
}
