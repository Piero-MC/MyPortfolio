import Image from "next/image";
import Mainp from "./Components/Mainp"
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Coverparticle from "./Components/Coverparticle"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Mainp/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}
