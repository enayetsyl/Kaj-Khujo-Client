import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
      if(currentUser){
        const loggedUser = {email: currentUser.email};
        axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
        .then(res => {
          console.log('token response', res.data)
        })
      }
    });
    return () => {
      subscribe();
    }
  },[])

  const authInfo = {
    user, 
    userName,
    setUserName,
    userPhoto,
    setUserPhoto,
    loading,
    createUser,
    signInUser,
    googleSignIn, 
    logOut,
    setUser

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;