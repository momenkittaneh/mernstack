import React, {useState} from 'react'

function Boxgen(props) {
    const [col , setcolor] = useState('');
    const dev =[];
    const createbox = (e) =>{
        e.preventDefault();
        dev.push(col);
        props.lift(dev);
    }
    return (
        <>
                    <form onSubmit={ createbox }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setcolor(e.target.value) } />
                <input type="submit" value="Create box" />

            </div>
        </form>
        </>
    )
}

export default Boxgen
