import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Homepage/Hero';
import Footer from './components/Footer/Footer';
import WhyUs from './components/Homepage/WhyUs';
import About from './components/Homepage/About';
import Mentors from './components/Homepage/Mentors';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mentors />
      <About />
      <WhyUs />
      <Footer />
    </>
  );
}

export default App;
