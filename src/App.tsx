import { ApolloProvider } from '@apollo/client';
import client from './config/apolloClient';
import React from 'react';
//router 
import { BrowserRouter, Route } from "react-router-dom";
//routes
import routes from './config/routes'



const App: React.FC = () => {
  
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
