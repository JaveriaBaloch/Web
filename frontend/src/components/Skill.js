import Img from "../IMG/homePage pics/Asset 7 copy.svg"
import SkillList from "./functions/skills"
function Skills(){
    return( <section className="skills">
    <div className="container">
        <h1>Skills</h1>
        <hr/>
        <div className="row">
            <div className="col-4">
                <img className="skill-img" src={Img} alt=""/>
            </div>
            <div className="skill-list">
               <SkillList/>
            </div>
        </div>
    </div>
</section>)
}
export default Skills