import { createContext } from "react"
import { auth } from "../firebase/firebase.config"
import PropTypes from "prop-types";

const AuthContext=createContext(auth)
const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthProvider