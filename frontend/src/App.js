import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/Homepage/HomePage';
import SDashboard from './components/StudntDashboard/SDashboard';
import ProjectDetails from './components/projectDetails/ProjectDetails';
import { jwtDecode } from 'jwt-decode';

// Import the UserAuthRoute component

import UserAuthRoute from './components/Authentication/UserAuthRoute'

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // User is logged in
      setIsLoggedIn(true);
      // Decode token to extract user information
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.username);
    }
  }, []);

  const handleLogin = (token, username) => {
    // Store token in local storage
    localStorage.setItem('token', token);
    // Set state to indicate user is logged in
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    // Set state to indicate user is logged out
    setIsLoggedIn(false);
    setUsername('');
    // Redirect to homepage
    navigate('/');
  };

  // Check if the current route is login or signup
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthRoute && <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />}
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/login" element={<Login onLogin={handleLogin} />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/sDashboard" element={<SDashboard />} isLoggedIn={isLoggedIn} />
  <Route path="/project-details/:id" element={<ProjectDetails />} />
</Routes>
      {!isAuthRoute && <Footer />}
    </>
  );
}

export default App;
