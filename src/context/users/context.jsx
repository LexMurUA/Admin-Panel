import { createContext, useContext, useState } from "react";


const usersContext = createContext(null)

export const UsersContextProvider =({children})=>{
    const [change, setChange] = useState(false)
    const [currentUser,setCurrentUser] = useState(null)


    return(
        <usersContext.Provider value={{change,setChange,currentUser,setCurrentUser}}>{children}</usersContext.Provider>
    )
}

export const UseUsersContext = ()=>{
    const context = useContext(usersContext)
    if (context === null) throw new Error("useUsersContext must be used within a UsersContextProvider");
        return context
}