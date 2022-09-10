import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import React, {useEffect, useState} from "react";
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import Men from './pages/Men';
import MenB from './pages/MenB';
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
  const url = 'http://127.0.0.1:1337/api/players'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON.data)
  }

  const url2 = 'http://127.0.0.1:1337/api/posts'
  const [todos2, setTodos2] = useState()
  const fetchApi2 = async () => {
    const response2 = await fetch(url2)
    const responseJSON2 = await response2.json()
    setTodos2(responseJSON2.data)
  }

  useEffect(() => {
    fetchApi()
    fetchApi2()
  }, [])
  return (
    <>
      <HeaderLogo />
      <Routes>
        <Route path="*" exact element={<Pag404 />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/dashboard" exact element={<Home />} />
        <Route path="/mission" exact element={<Mission />} />
        <Route path="/our-program" exact element={<OurProgramPage />} />
        <Route path="/club-staff" exact element={<ClubStaff />} />
        <Route path="/women" exact element={<Women />} />
        <Route path="/men" exact element={<Men />} />
        <Route path="/men-b" exact element={<MenB />} />
        <Route path="/universities" exact element={<UniversityPage />} />
        <Route path="/blog" exact element={<Blog />} />

        { !todos ? 'Cargando...' :
        todos.map( (player, index)=>{
           return <Route path={"/"+player.attributes.Name.toLowerCase()+"-"+player.attributes.Surname.toLowerCase().replaceAll(" ","-")} exact element={<PlayerPersonal id={player.id} />} />
        } )}

        { !todos2 ? 'Cargando...' :
        todos2.map( (post, index)=>{
           return <Route path={"/"+post.attributes.Title.toLowerCase().replaceAll(" ","-")} exact element={<FullBlogPost id={post.id} />} />
        } )}
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}
