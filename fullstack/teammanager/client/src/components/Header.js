import React from 'react'
import {Link} from '@reach/router';

const Header = () => {
    return (
        <div>
            <Link to='/players/list'> 
            <h1>Manage Player</h1>
            </Link>
            <h1> || </h1>
            <Link to='/status/games/1'>
                <h1>Manage Player Status</h1>
            </Link>
        </div>
    )
}

export default Header
