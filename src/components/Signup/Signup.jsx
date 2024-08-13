
import {useEffect, useState, useContext} from 'react'
import { toast } from 'react-toastify';
import './Signup.css'
import axios from 'axios';
import { contextTrial } from '../context/ContextTrialProvider';
import { useNavigate } from 'react-router-dom';



const url = 'http://localhost:8000/path/signup';



const Signup = () =>{
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password:'',
        gender:'',
        about: ''
    })

    const [togglePassword, setTogglePassword] = useState(false);

    const {setformData} = useContext(contextTrial);
    

    const handelOnInputName = (event) => {
        let key = event.target.name
        setUser( prevstate => ({
            ...prevstate,
            [key] : event.target.value
        }))
    }

    const handelOnInputEmail = (event) => {
        
        let key = event.target.name
        setUser( prevstate => ({
            ...prevstate,
            [key] : event.target.value
        }))
    }

    const handleGenderChange = (event) =>{
        //console.log(event.target.value)
        let key = event.target.name
        setUser( prevstate => ({
            ...prevstate,
            [key] : event.target.value
        }))
    }
    const handelAbout = (event) => {
        let key = event.target.name
        console.log(key)
        setUser( prevstate => ({
            ...prevstate,
            [key] : event.target.value
        }))
    }

    const formValidation = () => {
        
        if( user.name === '' ){
            console.log("toast aleart")
            toast.error("Name cannot be left Empty")
            return false
        }
        if( user.email === '' ){
            toast.error("Email cannot be left Empty")
            return false
        }
        if( !/\S+@\S+\.\S+/.test(user.email) ){
            toast.error("Enter a valid Email")
            return false
        }
        if( user.gender === '' ){
            toast.error("Please select your gender")
            return false
        }
        return true;
    } 

    const handlePasswordChange = (event) =>{
        let key = event.target.name
        console.log(key)
        setUser( prevstate => ({
            ...prevstate,
            [key] : event.target.value
        }))
    }
    const navigation = useNavigate();
    const handelOnSubmit = async (event) => {
        console.log("hii")
        event.preventDefault()
        //if(name )
        if(formValidation()) {
            setformData(user);
            
            axios.post(url, user)
            .then(response => {
                //alert(response.body)
                console.log( "response of fetch" ,response.dataf);
                toast.success("Data posted to API success")
            })
            .catch( error => {
                toast.error("Error from backend");
                console.log(error);
            })
            toast.success("You are signed up successfuly");
            setUser({name: '', email: '', gender: '', about: '', password: ''});
            
            navigation('/home')
            //useNavigation('/home');
        }
        //console.log(user.gender, "gender form signup.jsx")
    }
    const handlePasswordToggle = () => {
        setTogglePassword( togglePassword ? false : true) ;
    }
    
    return (<>
    <div className='div1'>
    <div className='container' >

        <h3>Sign-Up Page</h3>
        <form onSubmit ={handelOnSubmit} >
            
                <input name = 'name' className='nameInput' placeholder = 'Fill your name' value = {user.name} onInput ={ handelOnInputName } />
            
            
                <input name = 'email' className='emailInput' placeholder = 'Fill your email' value = {user.email} onInput ={ handelOnInputEmail } />
            
            <input type= {togglePassword?"password":'text'}  name = 'password' value={user.password} onChange={handlePasswordChange} placeholder='Create New Password' required />
            
            <select name='gender' className='genderInput' value={user.gender} onChange={handleGenderChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            
            <textarea name = 'about' onChange = {handelAbout} className='aboutInput' value = {user.about} placeholder='Tell Us Something About Yourself'>
            </textarea>
            <button type='submit' >Login</button>
            
        </form>
        <br/>
    </div>
    <br/>
    </div>
    </>
    )
}

export default Signup