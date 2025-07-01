import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Sucess from './pages/Sucess'
import Reservation from './pages/Reservation'
import Team from './pages/Team'
import Nav from './components/Nav'
import Menu from './components/Menu.jsx'
const App = () => {
  return (

    <>
    <Router>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/notFound" element={<NotFound/>} />
        <Route path="/sucess" element={<Sucess/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/team" element={<Team/>} />
        </Routes>
      </Router>
      </>
  )
}

export default App