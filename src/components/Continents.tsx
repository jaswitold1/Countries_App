import React from 'react'
//router 
import {Link} from 'react-router-dom'

function Continents() {
    return (
        <Link to={`/continents/${Math.random()}}`}>
            Continents
        </Link>
    )
}

export default Continents
