import logo from './logo.svg';
import './style.css';
import Home from './pages/home';
import Team from './pages/team';
import Booking from './pages/booking';
import {Login, LogUp} from './components/functions/login';
import {Link, Route, Routes} from 'react-router-dom'
import Profile from './pages/profile';
import Orders from './pages/orders';
import AllOrders from './pages/allProjects';
import Users from './pages/users';
import {useState,useEffect} from 'react'
import Messages from './pages/Messages';
function App() {
  const [role,setRole] = useState()
  useEffect(()=>{
    setRole(localStorage.getItem('role'))
  })
  return (
    <div>
     <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/Booking" element={<Booking/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/LogUp" element={<LogUp/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            
            <Route path="/yourOrder" element={<Orders/>}/>
            
            {role =="admin"&&
            <Route path="/AllProjects" element={<AllOrders/>}/>
             }
             {role =="admin"&&
            <Route path="/AllMessages" element={<Messages/>}/>
             }
            {role =="admin"&&
            <Route path="/Users" element={<Users/>}/>
           }
          
          </Routes>
    </div>

  );
}

export default App;
