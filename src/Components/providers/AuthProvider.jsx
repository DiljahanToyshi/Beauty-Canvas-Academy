/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../Firebase/firebase.config";
import axios from "axios";
import { getRole } from "../../hooks/getRole";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>{
    if(user){
      getRole(user.email).then(data => {
              

        setRole(data)})
    }
  },[user])
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

     useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);

         // jwt token
         if (currentUser) {
           axios
             .post("https://assignment-12-server-delta-six.vercel.app/jwt", { email: currentUser.email })
             .then((data) => {
              // const dataObj = JSON.parse(data.config.data);
              // console.log(dataObj)
               localStorage.setItem("access-token", data.data.token);
               setLoading(false);
             });
         } else {
           localStorage.removeItem("access-token");
         }
       });
       return () => {
         return unsubscribe();
       };
     }, []);

  const authInfo = {
    setUser,
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
    role,
    setRole,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
