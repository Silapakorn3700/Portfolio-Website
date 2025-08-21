import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { Education } from "./pages/Education";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

const App = () => {
  return (
    <div className="font-inter scroll-smooth bg-white min-h-screen">
      <Header />
      <div className="pt-20 px-2 sm:px-4 md:px-8">
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
