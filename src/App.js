import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Reset from './pages/Reset';
import Estadisticas from './pages/Estadisticas';
import React from "react";
import BlitzTournaments from './pages/BlitzTournaments';
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import Men from './pages/Men';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Mission from './components/Mission/Mission';
import UniversityPage from './components/Universities/UniversityPage/universityPage';

import Blog from './pages/Blog';

import OurProgramPage from './components/OurProgram/ourProgram';

import Women from './pages/Women';
import Contact from './components/Contact/Contact'
import ClubStaff from './pages/ClubStaff';


export default function App() {
  return (
    <>
      <HeaderLogo/>
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
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/dashboard" exact element={<Home />} />
        <Route path="/mission" exact element={<Mission />} />
        <Route path="/our-program" exact element={<OurProgramPage />} />
        <Route path="/club-staff" exact element={<ClubStaff />} />
        <Route path="/women" exact element={<Women />} />
        <Route path="/men" exact element={<Men />} />
        <Route path="/universities" exact element={<UniversityPage />} />
        <Route path="/blog" exact element={<Blog />} />
      </Routes>
      <ScrollToTop/>
      <Footer/>
    </>
  );
}
