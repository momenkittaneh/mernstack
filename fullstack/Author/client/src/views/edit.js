import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'
import Authorform from '../components/authorform';
import Deletebutton from '../components/deletebutton';
export default props => {
    const {id} = props
    const [author,setauthor] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            setauthor(res.data);
            setLoaded(true);
        })
    }, []);
    const updateAuthor = (prod) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, prod)
        .then(res => console.log(res));
    }


    return (
        <>
            <h1>Faviourte Author</h1>
            <br/><br/><Link to={`/`}>Home</Link>
            {loaded && (
                <div>
                    <Authorform 
                    onSubmitProp={updateAuthor}
                    initialName={author.Name}/>
                </div>)}
            
        </>
    )
}

