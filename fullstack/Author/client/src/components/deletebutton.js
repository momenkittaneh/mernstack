import React from 'react';
import axios from 'axios';

export default props => {
    
    const { authorid, successCallback } = props;
    const deleteauthor = e => {
        axios.delete(`http://localhost:8000/api/authors/${authorid}`)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteauthor}>
            Delete
        </button>
    )
}
