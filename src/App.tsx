import React from 'react';
//router 
import { BrowserRouter, Route, RouteComponentProps } from "react-router-dom";
//routes
import routes from './config/routes'



const App: React.FC<{}> = () => {
  
  return (
    <BrowserRouter>
  <div className="App">
  {
    routes.map((el,i)=>{
      return (
        <Route key={i} 
          path={el.path} 
          exact={el.exact} 
          component={el.component}
        />)

    })
  }
    </div>
    </BrowserRouter>
  );
}

export default App;
