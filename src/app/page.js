import Image from "next/image";
import Mainp from "../Components/Mainp";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Coverparticle from "../Components/Coverparticle"
import Contact from "../Components/Contact";

export default function Home() {
  return (
    
      <div>
        <div className="">
          <Mainp />
          <About />
          <Skills />
          <Projects />z
          <Contact />
        </div>
      </div>

  );
}
