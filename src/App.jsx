import Navbar from '../src/components/shared/Navbar';
import Home from '../src/components/pages/Home/Home';
import About from '../src/components/pages/About/About';
import Qualification from './components/pages/Qualification/Qualification';
import Skills from './components/pages/Skills/Skills';
import Projects from './components/pages/Projects/Projects';
import Services from './components/pages/Services/Services';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/shared/Footer';
import BackToTop from './components/others/BackToTop';
import Achievements from './components/pages/Achievement/Achievement';

function App() {
  return (
   <div className="w-full h-auto flex-grow bg-gray-900">
         <div className="w-[92%] sm:w-[95%] md:w-[80%] lg:w-[70%] container mx-auto">
            <Navbar />
            <Home />
            <About />
            <Qualification />
            <Skills />
            <Projects />
            <Services />
            <Achievements />
            <Contact />
            <BackToTop/>
         </div>
         <Footer />
   </div>
  );
}
export default App;
