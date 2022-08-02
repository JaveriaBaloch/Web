import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import {useState,useEffect} from 'react'
function ResponsiveNavbar(){

 let windowWidth = window.matchMedia("(max-width:760px)")
    if(windowWidth){
     return(
         <FontAwesomeIcon icon={faBars} className="fa fa-bars" onClick={showMenu}/>
     )
 }
    else  if(!windowWidth) {
     return(
         <FontAwesomeIcon icon={faUser}/>
     )
 }
}
 function showMenu (){
    let navbar = document.querySelector(".navbar")
    navbar.style.display = "flex"
    navbar.style.transform = "translateX(0%)"
    document.querySelector(".fa-xmark").addEventListener('click', hideNav)
 }
 function hideNav(){
    let navbar = document.querySelector(".navbar")
    navbar.style.display = "flex"
    let windowWidth = window.matchMedia("(max-width:760px)")
    
    if(windowWidth){
    navbar.style.transform = "translateX(100%)"
    }
 }
export default ResponsiveNavbar