import React from 'react'

function home(props) {
    const [people, setPeople] = useState([]);
 
    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);
 
    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}

export default home
