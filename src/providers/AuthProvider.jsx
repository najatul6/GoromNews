import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config"
import PropTypes from "prop-types";

const AuthContext=createContext(auth)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    useEffect(()=>{

    },[])
  return (
    <AuthContext.Provider >
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthProvider