import axios from "axios";
import {useState, useEffect} from "react"
function Contact(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [msg,setMsg] = useState('')
    const [alertMsg,setAlertMsg] = useState('')
    const [alertClass,setAlertClass] = useState('')

 const submit = () =>{
    if(name!="" || email!= "" || msg!=""){
        axios.post("http://localhost:3001/SendMessage",{name:name,email:email,msg:msg})
        setAlertClass('alert alert-success')

        setAlertMsg("You messages are send successfully!")
    }else{
        setAlertMsg("All flieds are required!")
        setAlertClass('alert alert-danger')
    }
 }
    return(
        <section className="contact-Us">
        <div className="container">
        <h1>Contact Us</h1>
            <hr/>
            {
                (alertClass=="alert alert-danger" ||alertClass=="alert alert-success")&&
                <div className={alertClass}>{alertMsg}</div>
            }
            <div className="card">
                    <div className="row">
                    <div className="point-of-access">
                        <ul>
                            <li>
                                <i className="fa fa-phone"></i>
                                <p>+61261452408 </p>
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <p>dotTech@gmail.com</p>
                            </li>
                            <li>
                                <i className="fa fa-map"></i>
                                <p>1501 Pso Del Campo, Palos Verdes Estates, CA 90274</p>
                            </li>
                        </ul>
                    </div>
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <input type="text" placeholder="Name*" onChange={(e)=>setName(e.target.value)}/>
                        <br/>
                        <input type="text"  placeholder="Email*" onChange={(e)=>setEmail(e.target.value)}/>
                        <br/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message" onChange={(e)=>setMsg(e.target.value)}></textarea>
                        <br/>
                        <button id="Submit" onClick={submit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section> 
    );
}
export default Contact