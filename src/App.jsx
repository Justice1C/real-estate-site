import './App.css';
import { DarkModeProvider } from './components/DarkModeContext';
import Clients from './sections/Clients';
import Header from './components/Header';
import About from './sections/About';
import Hero from './sections/Hero';
import PopularAreas from './sections/PopularAreas';
import Properties from './sections/Properties';
import Services from './sections/Services'; // Ensure this import exists
import Contact from './sections/Contact'; // Ensure this import exists
import Footer from './components/Footer'; // Ensure this import exists

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Hero />
      <About />
      <PopularAreas />
      <Properties />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;