import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import SkillSet from "./components/SkillSet";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <SkillSet />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
