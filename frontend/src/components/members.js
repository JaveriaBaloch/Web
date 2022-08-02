import m1 from "../IMG/team/Asset 2.svg"
import m2 from "../IMG/team/Asset 4.svg"
import m3 from "../IMG/team/Asset 5.svg"
import m4 from "../IMG/team/Asset 6.svg"
import m5 from "../IMG/team/Asset 7.svg"

function Members(){
    return(
    <section className="services team container">
    <h1>Team</h1>
    <hr/>
    <div className="row">
        <div className="team-members">
            <div className="card mx">
                <img src={m1} alt=""/>
                <h2>Calvin MacNally</h2>
                <small>CEO & Co-founder</small>
                <p>DotTech's CEO and founder is Calvin Macnally. He enjoys trying new things and coming up with new ideas.</p>
            </div>
            <div className="card mx">
            <img src={m2} alt=""/>
                <h2>Evie Hough</h2>
                <small>CTO</small>
                <p>Our Chief Technology Officer is Evie Hough. She is always interested in new technology and is concerned about the market.</p>
            </div>
            <div className="card mx">
            <img src={m3} alt=""/>
                <h2>Callie Broderick</h2>
                <small>Web Developer</small>
                <p>Our lead web developer is Callie Broderick. She is a highly creative person who enjoys pushing herself to new limits.</p>
            </div>
            <div className="card mx">
            <img src={m4} alt=""/>
                <h2>Patrick Rochfort</h2>
                <small>Graphic Designing</small>
                <p>Our graphic designer is Patrick Rochfort. He is a very inventive person, and his imagination knows no bounds.</p>
            </div>
            <div className="card mx">
            <img src={m5} alt=""/>
                <h2>Lena Allen</h2>
                <small>IT Specialist</small>
                <p>Our marketing manager is Lena Allen. She is well-versed in the workings of the market and current trends.</p>
            </div>
         </div>
    </div>
</section>
)
}
export default Members