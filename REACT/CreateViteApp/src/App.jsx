import React from 'react';
// import Gallery from '../components/Gallery';
import './App.css';
// import StateHandling from '../components/statehandling';
import Imagemanipulation from '../components/imagemanipulation';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';


function App() {
  return (
    <div className="container">
      {/* <h2>Welcome to React with Vite</h2>
      <Imagemanipulation /> */}
      {/* <StateHandling /> */}
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
