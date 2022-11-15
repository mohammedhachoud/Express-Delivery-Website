import {Route, Routes, Navigate, Router} from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';
import Signup from './components/signup';
import Adminboard from './components/adminboard';
import Userboard from'./components/userboard';
import React from 'react';
import Add from './components/add/add';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Userss from './components/userss/userss';
import Dashboard from "./components/dashboared/index";
import Enlvr from './components/enlvr';
// Check for token to keep user logged in
/*if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}*/

function App() {
  
 const user = localStorage.getItem("token");
 return (
   
    <Routes>   
     <Route path='/' exact element ={<Dashboard/>}></Route>
     <Route path='/main' exact element ={<Main/>}></Route>
     <Route path='/' exact element ={<Navigate replace to="/main"/>}></Route> 
     <Route path='/signup' exact element ={<Signup/>}></Route> 
     <Route path='/login'  exact element ={<Login/>}></Route> 
     <Route path='/add'  exact element ={<Add/>}></Route> 
     <Route path='/adminboard' exact element ={<Adminboard/>}></Route> 
     <Route path='/enlivraison' exact element ={<Enlvr/>}></Route> 
     <Route path='/userss' exact element ={<Userss/>}></Route> 
     <Route path='/userboard' exact element ={<Userboard/>}></Route> 
     
    </Routes>
    
  );
  
   }
 
export default App;
