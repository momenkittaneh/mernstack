import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default (props)  => {
    const {playerID,gameID}= props
    const [player,setplayer] = useState()
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/player/${playerID}`)
        .then(response => {
            setplayer(response.data);
        })
    },[])
    const changestat = (playerstat) => {
        console.log("Inside onPlayingHandler");
        const updatedPlayer = {
            ...player,
            status: {
                ...player.status,
                [`game${gameID}`]: playerstat
            }
        }
        axios.put(`http://localhost:8000/api/player/${playerID}`, updatedPlayer)
        .then(response => {
            setplayer(updatedPlayer);
        })



    return (
        <div>
            <button style={{background : player && player.Gamestat[`game${gameID}`] === 1 ? "green" : ""}} onClick={(e) => changestat(1)}>playing</button>

            <button style={{background : player && player.Gamestat[`game${gameID}`] === 2 ? "red" : ""}} onClick={(e) => changestat(2)}>not playing</button>

            <button style={{background : player && player.Gamestat[`game${gameID}`] === 3 ? "yellow" : ""}} onClick={(e) => changestat(3)}>undecided</button>

        </div>
    )
}}