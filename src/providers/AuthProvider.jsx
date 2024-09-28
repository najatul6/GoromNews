import { createContext, useEffect, useState } from "react"
import { getAuth } from "firebase/auth";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";


export const AuthContext=createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    useEffect(()=>{

    },[])
    const authInfo={
        user,
        setUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthProvider