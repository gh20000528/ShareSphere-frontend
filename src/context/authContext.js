import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentuser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8808/api/auth/login", inputs, {
            withCredentials:true,
        })
        console.log(res);
        setCurrentuser(res.data)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])

    return(
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}
