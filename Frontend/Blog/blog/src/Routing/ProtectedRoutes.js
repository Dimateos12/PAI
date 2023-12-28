import {Navigate, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";



const useAuth = () => {
    const [token, setToken] = useState(null);
    const [isToken,setIsToken] = useState(false);
    
    useEffect(() => {
        if (typeof Storage !== "undefined") {
            const localStorageToken = localStorage.getItem("token");

            if (localStorageToken) {
                setToken(localStorageToken);
                setIsToken(true);
            }
        } else {
            
            console.log("Przeglądarka nie obsługuje localStorage.");
        }
    }, []);
    
    const user = { loggedIn: isToken}
    
    return user && user.loggedIn && token;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to={"/signin"} />;
};
export default ProtectedRoutes;