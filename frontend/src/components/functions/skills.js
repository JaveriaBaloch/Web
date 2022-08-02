const progressCSS = ["95","90","94","96"]
function SkillList(){
    return progressCSS.map((e)=>{
        return(
        <div className="skill">
            <small>UX/UI</small>
                <div className="progressBar">
                    <div className="progress" style={{width: `${e}%`}}></div>
                </div>
            <small>{e}%</small>
        </div>
        )
     })
}
export default SkillList
