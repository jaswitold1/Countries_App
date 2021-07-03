import React from 'react'
//router 
import {Link} from 'react-router-dom'
import { useGetContinents } from '../hooks/useGetContinents'

function Continents() {
    const continents = useGetContinents()
    
    
    return (
        continents?.map((el,i)=>{
            return <Link key={i} to={`/continents/${el.code}`}>
                        {
                            el.name
                        }
                    </Link>
                    
        })
      
    )
}

export default Continents
