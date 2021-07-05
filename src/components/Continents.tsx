import React from 'react'
//router 
import {Link} from 'react-router-dom'
import { useGetContinents } from '../hooks/useGetContinents'

function Continents() {

    const continents = useGetContinents()
   
    
    
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            {
            continents ?  continents?.map((el:{name:string; code:string},i:number)=>{
                return <Link style={{display:'flex',flexDirection:'column',alignItems:'center',textDecoration:'none', backgroundColor:'yellow', border:"1px solid black", width:'30vw', margin:'5px' }} key={i} to={`/continents/${el.code}`}>
                        <h1 style={{textDecoration:'none'}}>{el.name}</h1>
                        <h2 style={{textDecoration:'none'}}>{el.code}</h2>
                    </Link>
                    
                })  : "loading"
            }
        </div>
   
      
    )
}

export default Continents
