import Calculator from "../components/calculator"
import Footer from "../components/footer"
import HERO from "../components/hero"
import Navbar from "../components/navbar"
import homePageHeroIMage from '../IMG/Asset 1.svg'
const props = {
    img : homePageHeroIMage,
    title : " CALCULATE THE ASTIMATE FOR YOUR PRODUCT. ",
    para : "",
    btnText : "Calculate",
    btnClass : "#cal"
}
function Booking(){
    return(
        <div>
            <main>
                <Navbar/>
                <HERO {...props}/>
            </main>
            <Calculator/>
            <Footer/>
        </div>
    )
}
export default Booking