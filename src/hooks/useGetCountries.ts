import {gql, useQuery} from '@apollo/client'
import { useParams } from 'react-router'

import ICountries from '../interfaces/countries'

 

const GET_COUNTRIES = gql`
query GetCountries($code:ID!)  {
  continent (code:$code) {
    name
    
    countries {
      name
    	emoji
      languages {
        name
      }
     
    }
  }
}`

export const useGetCountries = ():ICountries | undefined => {
    const params:{code:string} = useParams()
    console.log(params.code);
    
    const {data} = useQuery(GET_COUNTRIES, {
        variables: {code:params.code}
    })
    return data?.continent
}