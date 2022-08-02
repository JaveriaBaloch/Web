import axios from "axios";
import Navbar from "../components/navbar";
import {useEffect, useState} from 'react'
function AllOrders(){
    const [orders,setOrders] =useState([])
    const [role,setRole] =useState([])
    useEffect(()=>{
        axios.post("http://localhost:3001/SeeOrders").then(response=>{
            setOrders(response.data.orders)
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
                        <th>Title</th>
                        <th>Type</th>
                        <th>Start Date</th>
                        <th>Duration</th>
                        <th>Amount</th>
                        <th>No of Products</th>
                    </thead>
                    <tbody>
                    {orders.map((value,key)=>{
                            return (<tr key={key}>
                                <td>{value.Title}</td>
                                <td>{value.Type}</td>
                                <td>{value.StartDate}</td>
                                <td>{value.Duration} month</td>
                                <td>{value.Budget}</td>
                                <td>{value.noOFproducts}</td>
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
export default AllOrders