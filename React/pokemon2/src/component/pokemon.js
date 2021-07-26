import React,{useState} from "react";
import axios from "axios";
const Pokemon = (props) => {
    const [people, setPeople] = useState([]);
 

    const show =(e) =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPeople(response.data.results))
            .catch(console.log("error"));
    };
    return (
        <>
        <button onClick={show}>show</button>
        {people.map((Pokemon,i)=>
        <p key={i}>{Pokemon.name}</p>
        )}
           
        
        </>
    );
}
export default Pokemon;


