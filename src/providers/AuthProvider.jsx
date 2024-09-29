import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   Create User
  const createUser = (email, password,name) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        if (userCredential && userCredential.user) {
          const createdUser = userCredential.user;
          // Ensure updateProfile only runs if user exists
          return updateProfile(createdUser, { displayName: name }).then(() => {
            // Set user state only after updating profile
            setUser({ ...createdUser, displayName: name });
          });
        } else {
          throw new Error("User creation failed: userCredential is undefined");
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  //   Create User with Google
  const googleProvider = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Create User with Facebook
  const facebookProvider = () => {
    setLoading(true)
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //Log in User
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    
  };

  //   LogOut User
  const logoutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    loading,
    user,
    loginUser,
    createUser,
    googleProvider,
    facebookProvider,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
