import React from 'react'
//router 
import {Link} from 'react-router-dom'
import { useGetContinents } from '../hooks/useGetContinents'

function Continents() {

    const continents = useGetContinents()
   
    
    
    return (
        
      continents ?  continents?.map((el:any,i:number)=>{
            return <Link key={i} to={`/continents/${el.code}`}>
                        {
                            el.name
                        }
                    </Link>
                    
        }) : "loading"
      
    )
}

export default Continents
