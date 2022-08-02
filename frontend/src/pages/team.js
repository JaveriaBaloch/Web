import HERO from "../components/hero";
import Navbar from "../components/navbar";
import homePageHeroIMage from '../IMG/team/Asset 1.svg'
import Members from "../components/members";
import Contact from "../components/contact-us";
import Footer from "../components/footer";
const props = {
    img : homePageHeroIMage,
    title : "  meet our Team",
    para : "",
    btnText : "",
    btnClass : ""
}
function Team (){
 return(
    <div>
    <main>
    <Navbar/>
    <HERO {...props}/>
    </main>
    <Members/>
    <Contact/>
    <Footer/>
    </div>
 )
}
export default Team