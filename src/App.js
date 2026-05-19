import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Footer from './Footer';
import About from './About';
import Projects from './Project';
import Contact from './Contact';


function App() {
  
  return(
    <div>
      <Navbar/>
      <Hero/>
        <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;