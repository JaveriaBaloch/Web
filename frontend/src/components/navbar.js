import Logo from "../IMG/logo/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ResponsiveNavbar from "./functions/showNav";
import LightSwitch from "./functions/nightMode";
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'

function Navbar(){
    const [username,setUsername] = useState('')
    const [role,setRole] = useState('')
    useEffect(()=>{
        setUsername(localStorage.getItem('name'))
        setRole(localStorage.getItem('role'))
    })
  const logOut=()=>{
    localStorage.clear()
    window.location.href = "http://localhost:3000"
    }
    return(
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
                    <Link to="/Booking">Booking</Link>
                </li>
               
               {username== null &&
               <li>
                <Link to="/logUp">
                        Register
                </Link>
                </li>}
                {username== null &&
                <li>
                <Link to="/Login">
                        SignIn
                </Link>
                </li>
                }
               
                {role=="user" &&
                <li className="dropdown show">
                <a className="btn btn-black dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faUser}/>
                </a>
                 <div className="dropdown-menu bg-black" aria-labelledby="dropdownMenuLink">
                 <Link className="dropdown-item" to="/Profile">Profile</Link>
                 <Link className="dropdown-item" to="/yourOrder">Your Order</Link>
                 <a className="dropdown-item" onClick={logOut}>LogOut</a>
                 </div>
                 </li>
                }
                 { role=="admin" &&
                <li className="dropdown show">
                <a className="btn btn-black dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faUser}/>
                </a>
                 <div className="dropdown-menu bg-black" aria-labelledby="dropdownMenuLink">
                 <Link className="dropdown-item" to="/Profile">Profile</Link>
                 <Link className="dropdown-item" to="/AllMessages">Messages</Link>
                 <Link className="dropdown-item" to="/Users">Users</Link>
                 <Link className="dropdown-item" to="/AllProjects">Projects</Link>
                 <a className="dropdown-item" onClick={logOut}>LogOut</a>
                 </div>
                 </li>
                }
                
               
            </ul>
            <ResponsiveNavbar/>
        </nav>
        </div>

    )
}
export default Navbar;