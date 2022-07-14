import './App.css';
import TopBar from './components/TopBar/TopBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Reset from './pages/Reset';
import Estadisticas from './pages/Estadisticas';
import React from "react";
import BlitzTournaments from './pages/BlitzTournaments';
import Dashboard from './pages/Dashboard';
import HeaderLogo from './components/HeaderLogo/HeaderLogo';


export default function App() {
  let header;
  if (window.scrollY<80){
    header=<HeaderLogo/>
  }
  else{
    header=<TopBar/>
  }

  return (
    <>
      {header}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/reset" exact element={<Reset />} />
        <Route path="/leagues" exact element={<Home />} />
        <Route path="/tournaments" exact element={<Home />} />
        <Route path="/blitz-tournaments" exact element={<BlitzTournaments />} />
        <Route path="/friendly-matches" exact element={<Home />} />
        <Route path="/stats" exact element={<Estadisticas />} />
        <Route path="/contact" exact element={<Home />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </>
  );
}


