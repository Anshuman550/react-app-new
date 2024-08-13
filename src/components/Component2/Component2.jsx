import { useContext } from "react"
import { contextTrial } from "../context/ContextTrialProvider"

import './Component2.css'
const Component2 = () =>{

    const {formData, setformData} = useContext(contextTrial);

    const handleClick = () =>{
        setformData({
            name:"",
            email:"",
            gender:"",
            about:"",
        })
    }
    
    
   return <>
   {
        formData.name == "" ? <><h2>Please Sign In</h2></>:
        <>
            <div className="container1">
                <div><br></br></div>
                <div className="container2">
                <h2> Hello {formData.name}!</h2>
                <h3> Your Email : {formData.email}</h3>
                <h3> Gender: {formData.gender}</h3>
                <div className="container3"> <b>About You: </b>{formData.about}</div>
                </div>
                <button className="button" onClick={handleClick}>Logout</button>

            </div>
            
            
        </>
    }
   </> 
}

export default Component2