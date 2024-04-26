import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/Homepage/HomePage';
function App() {

  const location = useLocation();

  // Check if the current route is login or signup
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <>
    {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!isAuthRoute && <Footer />}
      {/* <Routes> */}
      
        {/* <Route path={'/login'} element={<Login />}></Route>

        <Route path={'/'} element={<Main child={<Home />} />}></Route>

        <Route path={'/dashboard'} element={<Main child={<Dashboard />} />}></Route> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
