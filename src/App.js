import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';

import Component2 from './components/Component2/Component2';
import ContextTrialProvider from './components/context/ContextTrialProvider';
import Signup from './components/Signup/Signup';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
     
      <ContextTrialProvider>
      <Navbar style = "background-color: red" />

        <Routes>{/*place all routes here*/}

          <Route path = '/signup' element = {<Signup/>} /> 
          
          <Route path = '/profile' element = {<Component2/>} ></Route>
          <Route path='/contact' element = { <h3>Contact us Page</h3> } /> 

          <Route path = '*' element = {<><h2>Error 404</h2>  <h3>page not found</h3></> } ></Route>
          <Route path = '/home' element = {<Homepage/>} />
        </Routes>
        
        </ContextTrialProvider>
      
      <ToastContainer/>
    </div>
  );
}

export default App;
