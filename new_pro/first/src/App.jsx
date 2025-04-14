import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './Home1';
import About from './About';
import Resources from './Resources';
import Contact from './Contact';
import Appointment from './Appointment';




function App() {
  return (
    <>
    
    

    
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </div>
    </Router>

    </>

  )
}

export default App;
