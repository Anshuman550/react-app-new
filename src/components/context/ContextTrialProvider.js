import { createContext, useContext, useState } from "react";

export const contextTrial = createContext();

const ContextTrialProvider = ({children}) =>{
    const [formData , setformData ] = useState({
        name: "",
        email: "",
        password:"",
        gender: "",
        about: "",
    });

    return <>
        <contextTrial.Provider value = { {formData, setformData}}  >
            {children}
        </contextTrial.Provider>
    </>
}
export default ContextTrialProvider;