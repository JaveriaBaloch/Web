import axios from "axios";
import Navbar from "../components/navbar";
import {useEffect, useState} from 'react'
function Users(){
    const [users,setUsers] =useState([])
    useEffect(()=>{
        axios.post("http://localhost:3001/Users").then(response=>{
            setUsers(response.data.users)
        })
    })
return(
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
                        <th>Address</th>
                    </thead>
                    <tbody>
                    {users.map((user,key)=>{
                            return (<tr  key={key}>
                                <td>{user.Name}</td>
                                <td>{user.Contact}</td>
                                <td>{user.Location}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)
}
export default Users