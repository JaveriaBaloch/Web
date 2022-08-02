import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState,useEffect} from 'react'
function MakingOrder(){
const [typeOfProject,setTypeOFProject] = useState('')
const [noOfProjects,setNoOfProjects] = useState('')
const [durationOfProject, setDurationOfProject] = useState(1)
const [dateToStart, setDateToStart] = useState('')
const [onBoarding,setOnBoarding] =useState(false)
const [total,setTotal] = useState('0')
const [title,setTitle] = useState('')
const costPerProject = 30000
const perMonthProjectCost = 15000
const consultationCostPerMonth = 20000

useEffect(()=>{

        if (typeOfProject!="Consultation"){
            setTotal(costPerProject * noOfProjects+(perMonthProjectCost*durationOfProject))
            if(onBoarding){
                setTotal(costPerProject * noOfProjects+(perMonthProjectCost*durationOfProject+50000))
            }
        }
        if(typeOfProject=="Consultation"){
            setTotal((consultationCostPerMonth*noOfProjects)+(perMonthProjectCost*durationOfProject))
        }
        if(noOfProjects ==0){
            setTotal(0)
        }
   
    })
    const handleChange = (e) => {
        setOnBoarding(!onBoarding);
      };
    const order = () =>{
        if(typeOfProject && noOfProjects && dateToStart && durationOfProject && title){
         axios.post("http://localhost:3001/Order",
         {
            title:title,
            type:typeOfProject,
            amount: total,
            date: dateToStart,
            id:localStorage.getItem('ID'),
            project: noOfProjects,
            duration : durationOfProject
        }).then((err,result)=>{
        })
        }
    }
    return(
        <div className="card col-12" id="order">
        <div className="point-of-access">
        <h1>Booking An Order</h1>
        <hr/>
        </div>
        {localStorage.getItem('ID')!= undefined &&
        <form  onSubmit={(e)=>{e.preventDefault()}}>
             <input min="0" type="text" placeholder="Title" className="NoPs" onChange={(e)=>setTitle(e.target.value)}/>
            <input min="0" type="number" placeholder="Number of Projects" className="NoPs" onChange={(e)=>setNoOfProjects(e.target.value)}/>
            <br/>
            <h3> Service Selection</h3>
            <div className="service-selection">
            <div className="type-of-project">
                <input  type="radio" onChange={(e)=>setTypeOFProject(e.target.value)} name="service" value="Mobile App Development"
                       />
                <label htmlFor="mAP">Mobile App Development</label>
              </div>
              <div className="type-of-project">
                <input  type="radio" name="service" onChange={(e)=>setTypeOFProject(e.target.value)} value="Web App Development"
                      />
                <label htmlFor="WAD">Web App Development</label>
              </div>
          
              <div className="type-of-project">
                <input required type="radio" onChange={(e)=>{
                return    setTypeOFProject(e.target.value)
                }} name="service" value="Consultation"
                      />
                <label htmlFor="mAP">Consultation</label>
              </div>
             
            </div>
            <br/>
            <div className="d-flex">
           <small>Project Duration</small>
           </div>
            <div className="d-flex">
            <span>{durationOfProject} month</span>
            <input type="range" min="1" max="12" className="NoPs No-of-months"  placeholder="No of months" onChange={(e)=>setDurationOfProject(e.target.value)}/>
            <span>12 months</span>
            </div>
            <div className="type-of-project d-flex">
                
                <input onChange={(e)=>setDateToStart(e.target.value)} required type="date" name="service"
                      />
                
              </div>
              {typeOfProject!="Consultation" &&
            <div className="d-flex">
                
                <input type="checkbox" value="onBoardingSupport" id="onBoardingSupport" onChange={(e)=>handleChange(e)}/>
                <label htmlFor="">Include OnBoarding and techinal Support</label>
                </div>
              }
                <div className="d-flex">
            <small>Note:  per project Onboarding and technical support is 50000 euro</small>
            </div>
            <button onClick={order}>Book</button>
            
            <h3 className="text-center">total: {total}</h3>
            
            </form>
}
{localStorage.getItem('ID')== undefined&& 
<div className="card card-body w-100">
<button className="w-75 my-5 mx-auto">
<Link className="btn-black mx-auto" to="/Login">Login</Link>
</button>
<button className="w-75 my-5 mx-auto">
<Link className="btn-black mx-auto" to="/LogUp">Signup</Link>
</button>
</div>
}
    </div>
    )
}
export default MakingOrder