import {Link} from 'react-router-dom'
import './Navbar.css'
import { contextTrial } from '../context/ContextTrialProvider'
import { useContext } from 'react'

const Navbar = ()=> {
    const {formData, setformData} = useContext(contextTrial);
    const handelLogout = () => {
      setformData({
        name: '',
        email: '',
        password: '',
        gender: '',
        about: '',
      })
    }
    return <>
        
        <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/home">
          <img src={'./c3ihub_logo.png'} alt="Logo" className="navbar-logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        {
          formData.name === ''? 
            <><li>Login</li>
            <li><Link to="/signup">Signup</Link></li> </>: 
            <>
            <li><Link to="/profile">{formData.name}</Link></li>
            <li className='logout' onClick={handelLogout}>Logout</li>
            </>
        }
      
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
    </>
}
export default Navbar