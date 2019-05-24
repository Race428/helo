import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'
import {HashRouter} from 'react-router-dom'
import  {Provider} from 'react-redux'
import store from './Redux/store'

import Nav from './Components/Nav/Nav'





function App() {
  return (
    
    <div className="App">
      <Provider store = { store}>
<HashRouter>
      <Nav />
      {routes}




  </HashRouter>
  </Provider>
    </div>
  );
}

export default App;
