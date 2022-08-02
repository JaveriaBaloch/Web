import Navbar from "../components/navbar";
import HERO from "../components/hero";
import Services from "../components/service";
import Skills from "../components/Skill";
import Contact from "../components/contact-us";
import Footer from "../components/footer";

// img for home page 

import homePageHeroIMage from '../IMG/homePage pics/Asset 1.svg'
const props = {
    img : homePageHeroIMage,
    title : " Live your dream ",
    para : "Incline is a collection of landing and support pages designed to assist businesses in promoting new goods and business launches.",
    btnText : "View Plans",
    btnClass : "#Services"
}
function Home() {
    return (
    <div>
      <main>
        <Navbar/>
        <HERO {...props}/>
      </main>
        <Services/>
        <Skills/>
        <div className="ending-svg"></div>
        <Contact/>
        <Footer/>
     
      </div>
    );
  }
  
  export default Home;