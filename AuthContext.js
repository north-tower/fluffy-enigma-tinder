import React,{createContext, useState} from "react";
import { ActivityIndicator } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)

    const login = () => {
        setUserToken('dhdhdh')
        setIsLoading(false)
    }

    const logout = () => {
        setUserToken(null)
        setIsLoading(false)
    }

    
    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}