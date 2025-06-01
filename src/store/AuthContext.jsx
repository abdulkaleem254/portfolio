import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current user is ", currentUser);

            setUser(currentUser);

        });
        return () => unsubscribe();
    }, [])
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
};
export { AuthContext, AuthProvider };
