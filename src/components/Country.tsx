import React from 'react'

import { useGetCountries } from '../hooks/useGetCountries'

function Country() {
    
  
       
     const countries:any = useGetCountries()
     console.log(countries);

     
 
 
  
    return (
        <div>
            {
             countries ?   countries?.countries.map((el:any,i:number)=>{
                    return <div key={i}>
                        {el.name}
                        {el.emoji}
                        {el.languages[0]?.name}
                    </div>
                }) : "loading"
            }
        </div>
    )
}

export default Country
