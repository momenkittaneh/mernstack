import React,{useState,useEffect} from "react";

const Pokemon = (props) => {
    const [people, setPeople] = useState([]);
 

    const show =(e) =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPeople(response.results))
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


