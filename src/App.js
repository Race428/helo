import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'


import Nav from './Components/Nav/Nav'





function App() {
  return (
    // <HashRouter>
    <div className="App">

      <Nav />
      {routes}




    </div>
    // </HashRouter>
  );
}

export default App;
