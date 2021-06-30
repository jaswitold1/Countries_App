import React from 'react';
//router 
import { BrowserRouter, Route } from "react-router-dom";
//components
import Link from './components/Link'
import Continents from './components/Continents'
import Country from './components/Country'



function App() {
  
  return (
    <BrowserRouter>
  <div className="App">
   <Route exact path='/' component={Link}/>
   <Route exact path='/continents' component={Continents}/>
    <Route exact path='/continents/:code' component={Country}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
