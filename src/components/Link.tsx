import React from 'react'
//router 
import {Link as LinkRouter} from 'react-router-dom'

function Link() {
    return (
        <LinkRouter style={{
            display:'flex',
            justifyContent:'center',
             alignItems:'center',
             height:'100vh',
             textDecoration:'none',
             color: 'coral'
             }} to='/continents' >
           <h1>Link</h1>
        </LinkRouter>
    )
}

export default Link
