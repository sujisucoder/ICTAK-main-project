import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useState, useEffect  } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/Homepage/HomePage';
import SDashboard from './components/StudntDashboard/SDashboard';

import  { useRef } from 'react';


function App() {

  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const aboutRef = useRef(null);

  useEffect(() => {
    setIsLoggedIn(false);
    setUsername('sujith');
  }, []);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if the current route is login or signup
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <>
    {!isAuthRoute && <Navbar scrollToAbout={scrollToAbout} isLoggedIn={isLoggedIn} username={username} />}
      <Routes>
        <Route path="/" element={<HomePage aboutRef={aboutRef}  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sDashboard" element={<SDashboard />} />
        {/* <Route path="/project/:id" component={ProjectDetails} /> */}
      </Routes>
      {!isAuthRoute && <Footer />}
      
    </>
  );
}

export default App;
