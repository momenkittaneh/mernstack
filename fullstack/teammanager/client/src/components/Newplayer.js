import React,{useState,useEffect} from 'react'

export default props => {
    const {newplayer,setnewplayer,onSubmitProp} = props
    const [Name,setName] = useState("")
    const [Position,setPosition] = useState("")
    const [Game1,setGame1] = useState(0)
    const [Game2,setGame2] = useState(0)
    const [Game3,setGame3] = useState(0)
    const createplayer =(e) =>{
        e.preventDefault();
        onSubmitProp({
            Name,Position,Game1,Game2,Game3
        })
    }
    return (
        <form onSubmit={createplayer}>
            <h1>Add Player</h1>
            <label>Player name:</label>
            <input type="text" onChange={(e)=> setName(e.target.value)} />
            <label>Perfered Possition</label>
            <input type="text" onChange={(e)=> setPosition(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
        )
}

