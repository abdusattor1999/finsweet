import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Career from "./pages/Careers";
import Blog from "./pages/Blog";
import Blogin from './pages/BlogInner';
import Testc from './pages/TestingCareers';
import Contact from './pages/ContactUs';
import Priva from './pages/Privac';
import NavBor from './Components/NavBor';
import Footer from './Components/Footer';

function App() {
  return (
      <div className="max-width">


        <Router>
        <NavBor/>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/career" element={<Career />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privac" element={<Priva />} />
                  <Route path="/testc" element={<Testc />} />
                  <Route path="/blogin" element={<Blogin />} />

              </Routes>
          <Footer/>
        </Router>
      </div>
  )
}

export default App;
