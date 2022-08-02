import {useState,useEffect} from 'react'
import axios from "axios";
import Navbar from '../components/navbar';

function Profile(){
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password,setPassword] = useState('')
    const [confrimPassword,setConfirmPassword] = useState('')
    const [location, setLocation] = useState('')
    const [id, setID] = useState(0)
    const [loginStatus, setLoginStatus] = useState()
    const [msg,setMsg]= useState()
    console.log(localStorage.getItem('name'))
    const rotate=()=>{
        document.querySelector('#profile').style.transform = "rotateY(-90deg) translateX(-100%)"
        document.querySelector('#update').style.transform = "rotateY(0deg) translate(-100%)"
        
    }
    const submit=()=>{
        const value = localStorage.getItem('ID')
        setID(value)
        if(confrimPassword!=password){
            setMsg("error")
            if(msg=="error"){
            let alertMsg = document.createElement('div')
               alertMsg.setAttribute('class','alert alert-danger')
               alertMsg.innerText = "Passwords doesn't match"
                document.querySelector('.show-alert').prepend(alertMsg)
            }
        }
        if( confrimPassword==""||password==""){
            setMsg("missing")
            if(msg=="missing"){
            let alertMsg = document.createElement('div')
               alertMsg.setAttribute('class','alert alert-danger')
               alertMsg.innerText = "Both Passwords are required!"
                document.querySelector('.show-alert').prepend(alertMsg)
            }}
        if(location == ""){
            setLocation(localStorage.getItem('location'))
        }
        if(name == ""){
            setName(localStorage.getItem('name'))
        }
        if(email == ""){
            setEmail(localStorage.getItem('email'))
        }
        else{ 
            axios.post('http://localhost:3001/Update',
            {name: name,
            email:email,
            password:password,
            location: location,
            id:id
             }
            ).then(response=>{return response.data}).then(data=>{
                console.log(data)
                localStorage.setItem('name',name)
                localStorage.setItem('email',email)       
                localStorage.setItem('password',password)    
                localStorage.setItem('location',location)       
           
            })
        }
    }
    useEffect(()=>{
       if(localStorage.getItem('name')){
       setLoginStatus("Active")
       }
       setID(localStorage.getItem('ID'))
     
   })
    return(
        <main>
        <div className="container">
        <Navbar/>
    <div className="my-5">
            <div className="container show-alert">
                <div className="d-flex">
                    <div className="card col-lg-12 col-md-7 col-sm-9 mx-auto my-2" id="profile">

                        <div className="card-body">
                            
                            <div className="card-header">
                                <h3 className="card-title text-dark text-center">Your Current Profile</h3>
                            </div>
                            <div className="card-body h-75">
                               <input type="text" className="form-control my-3" disabled={true} placeholder={localStorage.getItem('name')} name="name"/>
                                <input type="text" className="form-control my-3" disabled={true} placeholder={localStorage.getItem('location')} name="Location"/>
                                <input type="email" className="form-control my-3" disabled={true} placeholder={localStorage.getItem('email')} name="Email"/>
                                <button className="w-100 mt-auto" onClick={rotate}>Update</button>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-12 col-md-7 col-sm-9 mx-auto my-2" id='update'>

                        <div className="card-body">
                            
                            <div className="card-header">
                                <h3 className="card-title text-dark text-center">Update your Detail</h3>
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
                                <small className='text-dark ml-2 mt-3 text-secondary'>Enter confirm your password to Validate*</small>
                                <button className="w-100" onClick={submit}>Update</button>
                           
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
export default Profile