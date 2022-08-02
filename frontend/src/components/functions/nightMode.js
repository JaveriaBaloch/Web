function LightSwitch(){
    return(
        <div className="theme-switch">
                <span>Day</span>
                <input type="checkbox" onClick={checkMode}/>
                <span>Night</span>
        </div>
    )
}
function checkMode(){
 let body =   document.querySelector('body')
    let lightSwitch = document.querySelectorAll("input[type='checkbox']")[0]
    if(lightSwitch.checked){
        body =  document.querySelector("body")
        body.setAttribute("class","black")
      }
      else{
          body =  document.querySelector("body")
          body.setAttribute("class","")
      }
}
export default LightSwitch