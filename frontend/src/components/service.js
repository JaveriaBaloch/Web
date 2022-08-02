import Img1 from "../IMG/homePage pics/Asset 3.svg"
import Img2 from "../IMG/homePage pics/Asset 5.svg"
import Img3 from "../IMG/homePage pics/Asset 6.svg"

function Services(){
    return(
        <section className="services container" id="Services">
        <h1>Services</h1>
        <hr/>
        <div className="row animate-surface">
            <div className="card-body">
                    <div className="card-front card">
                    <h3>Mobile App Development</h3>
                    <img src={Img1}/>
                    </div>
                    <div className="card-back card">
                        <p>We can create a mobile app for both Android and iOS smart devices, as well as a hybrid application if necessary.</p>
                    </div>
            </div>
            <div className="card-body">
                <div className="card-front card">
                <h3>Web App Development</h3>
                <img src={Img2}/>
                </div>
                <div className="card-back card">
                    <p>We can create anything from a basic static web page to a multi-page web app with a database for you.</p>
                </div>
             </div>
             <div className="card-body">
                <div className="card-front card">
                    <h3>Technical Support</h3>
                    <img src={Img3}/>
                </div>
                <div className="card-back card">
                    <p>Leave the teaching to us and concentrate on your business. Join our Tech plans to get help.</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Services;