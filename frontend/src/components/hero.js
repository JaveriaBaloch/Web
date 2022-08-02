function HERO(props){
 const   showBtn = () =>{
    if(props.btnText === ""){
        return
    }
    else{
        return (
            <button>
            <a href={props.btnClass}>{props.btnText}</a>
            </button>
        )
    }
 }
 const showPara = () =>{
    if(props.para === ""){
        return
    }
    else{
        return(
            <p>{props.para}
            </p>
        )
    }

 }
    return(
        <div className="row hero-text">
        <div className="col-4">
            <h1>
                {props.title}
            </h1>
            {showPara()}
           {showBtn()}
        </div>
        <img src={props.img} alt=""/>
    </div>
    )
}
export default HERO;