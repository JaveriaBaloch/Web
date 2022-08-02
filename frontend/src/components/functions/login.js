import Logo from "../../IMG/logo/logo.svg"
import ResponsiveNavbar from "../functions/showNav";
import LightSwitch from "../functions/nightMode";
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios";
function Login(){
 const [email, setEmail ] = useState('')
 const [password,setPassword] = useState('')
 const [loginStatus, setLoginStatus] = useState('')
 const [alert, setAlert] = useState('')
 useEffect(()=>{
    if(localStorage.getItem('name')){
    setLoginStatus("Active")
    }
    if(loginStatus=="Active"){
        window.location.href = "/";
    }
})

 const submit=()=>{
    setAlert("error")
        axios.post('http://localhost:3001/Login',{email:email,password:password}).then((response)=>{
        if(password==response.data.user[0].Password){
        localStorage.setItem('ID',response.data.user[0].CID) 
        localStorage.setItem('name',response.data.user[0].Name)
        localStorage.setItem('email',response.data.user[0].Contact)       
        localStorage.setItem('password',response.data.user[0].Password)    
        localStorage.setItem('location',response.data.user[0].Location)
        localStorage.setItem('role',response.data.user[0].role)
        window.location.href = "/";   
        }
    }
    )
    if(localStorage.getItem('role') ==""){
         setAlert("error")
    }
 }
    return(
        <main>
        <div className="container">
            <nav className="row">
            <Link to="\" className="navbrand">
                <img className="logo" src={Logo} alt=""/>
                </Link>
            <LightSwitch/>
            <ul className="navbar"> 
                 <p className="fa fa-xmark">X</p>
                 <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/team">Team</Link>
                </li>
                <li className="nav-item">
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link to="/LogUp">Sign Up</Link>
                </li>
            </ul>
            <ResponsiveNavbar/>
        </nav>
        <div className="my-5">
                <div className="container">
                {alert == "error"&&
            <div className="alert alert-danger">Email or Password is Invalid</div>}
                    <div className="row">
                        <div className="card col-lg-9 col-md-7 col-sm-9 mx-auto my-2">
                            <div className="card-body">
                                <div className="card-header">
                                    <h3 className="card-title text-dark text-center">Sign In</h3>
                                </div>
                                <div className="card-body">
                                    <input type="email" className="form-control my-3" required={true} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                                    <input type="password" className="form-control my-3" required={true} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                    <button type="submit" className="w-100" onClick={submit}>Login</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}
function LogUp(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confrimPassword,setConfirmPassword] = useState('')
    const [alert, setAlert] = useState('')
    const [loginStatus, setLoginStatus] = useState()
    const [location, setLocation] = useState('')
    useEffect(()=>{
        if(localStorage.getItem('name')){
            setLoginStatus("Active")
            }
        if(loginStatus=="Active"){
                window.location.href = "/";
        }
    })

    const submit=()=>{
        setAlert("")
        if(confrimPassword!=password){
            setAlert("Passwords doesn't match")
        }
        else{
            axios.post('http://localhost:3001/Signup',
            {name: name,
            email:email,
            password:password,
            location: location
             }
            ).then((result)=>{
                if(result.data.user=="Account is create successfully"){
                setAlert("Success")
       
    }
                else if(result.data.user.msg== "Already Taken Exist"){
                    setAlert("Email is already Taken")
                 }
                })
        }
    }
    // if()
    return(
        <main>
        <div className="container">
            <nav className="row">
            <Link to="\" className="navbrand">
                <img className="logo" src={Logo} alt=""/>
                </Link>
            <LightSwitch/>
            <ul className="navbar"> 
                 <p className="fa fa-xmark">X</p>
                 <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/team">Team</Link>
                </li>
                <li className="nav-item">
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Login">Sign In</Link>
                </li>
            </ul>
            <ResponsiveNavbar/>
        </nav>
        <div className="my-5">
                <div className="container">
                {(alert=="Email is already Taken"||alert=="Passwords doesn't match" ||  alert==("<ul>Your Password should have:<li>small letter</li><li>larger letter</li><li>8 letters</li><li>special character long password</li></ul>")) &&
                <div className="alert alert-danger">{alert}</div>}
                 {alert=="Success" &&
                <div className="alert alert-success">Account is created successfully, <Link to="/Login">Login to your Account</Link></div>}
                    <div className="row">
                        <div className="card col-lg-9 col-md-7 col-sm-9 mx-auto my-2">
                            <div className="card-body">
                                <div className="card-header">
                                    <h3 className="card-title text-dark text-center">Sign Up</h3>
                                </div>
                                <div className="card-body">
                                    <input type="text" className="form-control my-3" required={true} placeholder="Username" name="name"
                                    onChange={(e)=>{setName(e.target.value)}}/>
                                     <input type="text" className="form-control my-3" required={true} placeholder="Location" name="Location"
                                    onChange={(e)=>{setLocation(e.target.value)}}/>
                                    <input type="email" className="form-control my-3" required={true} placeholder="Email" name="Email"
                                    onChange={(e)=>{setEmail(e.target.value)}}/>
                                    <input type="password" className="form-control my-3" required={true} placeholder="Password" name="Password"
                                    onChange={(e)=>{setPassword(e.target.value)}}/>
                                    <input type="password" className="form-control my-3" required={true} placeholder="Confrim Password"
                                    onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                                     
                                    <button className="w-100" onClick={submit}>Log Up</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
export {Login, LogUp}
