import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Error from './Components/Error';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
   <Routes>
    <Route element ={<Signup/>} path='/signup'/>
    <Route element ={<Login/>} path='/login'/>
    <Route element ={<Home/>} path='/home'/>
    <Route element ={<Error/>} path='/*'/>
   
   </Routes>
  );
}

export default App;
