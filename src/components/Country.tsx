import React from 'react'

import { useGetCountries } from '../hooks/useGetCountries'


function Country() {
    
  
       
     const countries = useGetCountries()
     console.log(countries);

     
 
 
  
    return (
        <div  >
            {
             countries ?   countries?.countries.map((el,i)=>{
                    return <div style={{
                                        display:'grid',
                                        gridTemplateColumns: "repeat(3, 1fr)",
                                        gap: '50px',
                                        gridAutoRows:"minmax(50px,auto)",
                                      
                        }} key={i}>

                            <div >{el.name}</div>
                            <div>{el.emoji}</div>
                            <div>{el.languages[0]?.name}</div>
                            
                    </div>
                }) : "loading"
            }
        </div>
    )
}

export default Country
