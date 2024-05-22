import Image from "next/image";
import Mainp from "./Components/Mainp"
import Navbar from "./Components/Navbar";
import Main from "./Components/Mainp";
import Coverparticle from "./Components/Coverparticle"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Coverparticle/>
      <Mainp />
    </div>


  );
}
