import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import React from "react";
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
import Pag404 from './components/Pag404/Pag404'
import PlayerPersonal from './components/PlayerPersonalPage/playerPersonal';
import FullBlogPost from './components/FullBlogPost/FullBlogPost';


export default function App() {
  return (
    <>
      <HeaderLogo/>
      <Routes>
        <Route path="*" exact element={<Pag404/>}/>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/dashboard" exact element={<Home />} />
        <Route path="/mission" exact element={<Mission />} />
        <Route path="/our-program" exact element={<OurProgramPage />} />
        <Route path="/club-staff" exact element={<ClubStaff />} />
        <Route path="/women" exact element={<Women />} />
        <Route path="/men" exact element={<Men />} />
        <Route path="/universities" exact element={<UniversityPage />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/prueba" exact element={<FullBlogPost/>}/>
      </Routes>
      <ScrollToTop/>
      <Footer/>
    </>
  );
}
