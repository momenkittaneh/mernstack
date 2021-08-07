import React from 'react';
import axios from 'axios';

export default props => {
    
    const { playerID, successCallback } = props;
    const deleteplayer = e => {
        axios.delete(`http://localhost:8000/api/player/${playerID}`)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteplayer}>
            Delete
        </button>
    )
}
