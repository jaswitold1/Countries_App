//interface
import  IRoute  from "../interfaces/route";
//components
import Link from '../components/Link'
import Continents from '../components/Continents'
import Country from '../components/Country'

 const routes: IRoute[] = [
    {
        component: Link,
        exact:true,
        path:'/',
       
    },
    {
        component: Continents,
        exact:true,
        path:'/continents',
       
        
    },
    {
        component: Country,
        exact:true,
        path:'/continents/:code',
       
    },

]
export default routes