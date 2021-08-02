import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {navigate} from '@reach/router'

function People(props) {
    const [hero,sethero] = useState([])
    // let myhero = props.id
    useEffect( () => {
        axios
            .get('https://swapi.dev/api/people/' + props.id)
            .then(response => { sethero (response.data) } )
            .catch(res=>console.log(res))

            // .catch( navigate('/error'))
    }, [props.id]);

    return (
        <div>
            <h1>{hero.name}</h1>
            <p>height:{hero.height}</p>
            <p>mass:{hero.mass}</p>
            <p>hair color:{hero.hair_color}</p>
            <p>skin color:{hero.skin_color} </p>
        </div>
    )
}

export default People
