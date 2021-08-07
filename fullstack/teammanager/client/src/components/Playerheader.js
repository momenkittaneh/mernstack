import React from 'react'
import {Link} from '@reach/router';

const Header = () => {
    return (
        <div>
            <Link to='/players/list'> 
            <h2>List</h2>
            </Link>
            <h2> || </h2>
            <Link to='/players/addplayer'>
                <h2>Add Player</h2>
            </Link>
        </div>
    )
}

export default Header
