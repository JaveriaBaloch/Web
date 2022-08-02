import axios from "axios";
import Navbar from "../components/navbar";
import {useEffect, useState} from 'react'
function Messages(){
    const [Messages,setMessages] =useState([])
    useEffect(()=>{
        axios.post("http://localhost:3001/SeeMessages").then(response=>{
            setMessages(response.data.messages)
        })
    })
return(
    <div>
        <div>
        <main>
            <Navbar></Navbar>
            <h1 className="my-4">All Order</h1>
        </main>
        <div className="container">
            <div className="row">
                <table className="table table-dark m-5">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </thead>
                    <tbody>
                    {Messages.map((msg,key)=>{
                            return (<tr key={key}>
                                <td>{msg.Name}</td>
                                <td>{msg.Email}</td>
                                <td>{msg.Message}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </div>
                    
)
}
export default Messages