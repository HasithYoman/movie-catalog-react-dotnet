import React, { useEffect, useState } from 'react';
import './App.css';
import movieDTO from './Movies/movies.model';
import MoviesList from './Movies/MoviesList';
import Menue from './Menue';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexGenres from './genres/IndexGenres';
import LandingPage from './Movies/LandingPage';
import routes from './route-config'




function App() {


  return (

      <BrowserRouter>
        <Menue/>
         <div className='container'>
          <Switch>
            {routes.map(route=>
            <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component/>
            </Route>)}
          </Switch>
         </div>
          
      </BrowserRouter>
  );
}

export default App;
