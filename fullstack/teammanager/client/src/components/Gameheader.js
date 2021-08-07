import React from 'react'
import {Link} from '@reach/router';

const Header = () => {
    return (
        <div>
            <Link to='/status/games/1'> 
            <h2>GAme1</h2>
            </Link>
            <h2> || </h2>
            <Link to='/status/games/2'>
                <h2>Game2</h2>
            </Link>
            <h2> || </h2>
            <Link to='/status/games/3'>
                <h2>Game3</h2>
            </Link>
        </div>
    )
}

export default Header
