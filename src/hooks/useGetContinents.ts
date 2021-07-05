import {gql, useQuery} from '@apollo/client'
import IContinent from '../interfaces/continent'

const GET_CONTINENTS = gql`
query  {
  continents {
    name
    code
  }
}`

export const useGetContinents = () => {
    const {data} = useQuery(GET_CONTINENTS)
    return data?.continents
}