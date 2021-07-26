import React,{useState,useEffect} from 'react'
import {navigate} from '@reach/router'
import axios from 'axios';

function Planets(props) {
    const[ablerto,setalberto] = useState([]);
    // let whatisit = props.id
    useEffect( () => {
        axios
            .get('https://swapi.dev/api/planets/' +  props.id)
            .then(response => { setalberto(response.data) } )
            .catch(navigate('/error'))
    }, [ props.id]);

    return (
        <div>
            <h1>{ablerto.name}</h1>
            <p>Climate: {ablerto.climate}</p>
            <p>Terrian:{ablerto.terrain}</p>
            <p>Surface water:{ablerto.surface_water}</p>
            <p>Population:{ablerto.population}</p>
    
        </div>
)
    }
export default Planets
