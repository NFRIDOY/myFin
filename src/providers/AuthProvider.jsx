import { createContext, useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const axios = useAxios()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const createUserEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInEmailPass = (email, password) => {
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
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log("unSubscribe")
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                const loggedInUser = {email: currentUser.email};
                console.log(loggedInUser)         
            } else {
                toast.error("User Signed Out!!!")

            }
        })
        return () => {
            unSubscribe()
        }
    }, [user])

    const updateUser = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {
                setUser(user)
                toast.success("Profile updated!")
            }).catch((error) => {
                toast.success("Profile updated! Failed")
                console.log(error)
            });
        if (user !== null) {
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;

            setUser(user)
            const uid = user.uid;
        }
    }


    const contextInfo = { user, setUser, loading, setLoading, createUserEmailPass, updateUser, signInEmailPass, googleSignIn, logOut }

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    )
}
