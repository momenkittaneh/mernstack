import React,{useState} from 'react'
import {navigate} from '@reach/router'
function Home(props) {
    const [marsello,setmarsello] = useState("");
    const [myid,setmyid] = useState();

    const whatitneed= (e)=>{
        setmarsello(e.target.value)

    }
    const handlewho=(e) =>{

        setmyid(e.target.value)
    }
    const handlework = (e) => {
        e.preventDefault();
        navigate('/' + marsello + '/' + myid)

    }

    return (
        <div >
            <form onSubmit={handlework} style={{display:'flex' , justifyContent:'center'}}>
                <label>search for</label>
                <select name="option" onChange={whatitneed}>
                <option value="people">people</option>
                <option value="planets">planets</option>
                </select>
                <label>ID</label>
                <input type="number" name="id" onChange={handlewho} />
                <input type="submit" value="submit" />
            </form>
       </div>
        
    )
}

export default Home
