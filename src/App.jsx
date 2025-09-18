
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";

import Hero from "./sections/HeroFixed";
import About from "./sections/About";
import ShowcaseSection from "./sections/ShowcaseSection";

import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <ShowcaseSection />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;
