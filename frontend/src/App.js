import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Homepage/Hero';
import Footer from './components/Footer/Footer';
import WhyUs from './components/Homepage/WhyUs';
import About from './components/Homepage/About';
import Mentors from './components/Homepage/Mentors';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Mentors/>
     <WhyUs/>
     <Footer/>
     <About/>
      <Routes>
      <Route path={'/login'} element={<Login />}></Route>

        <Route path={'/signup'} element={<Signup />}></Route>
        {/* <Route path={'/login'} element={<Login />}></Route>

        <Route path={'/'} element={<Main child={<Home />} />}></Route>

        <Route path={'/dashboard'} element={<Main child={<Dashboard />} />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
