import { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from 'react-hook-form';

const usersContext = createContext(null)

export const UsersContextProvider = ({ children }) => {
    const [change, setChange] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const methodsAddUser = useForm()

    return (
        <usersContext.Provider value={{ change, setChange, currentUser, setCurrentUser, methodsAddUser }}>
            <FormProvider {...methodsAddUser}>
                {children}
            </FormProvider >
        </usersContext.Provider>
    )
}

export const UseUsersContext = () => {
    const context = useContext(usersContext)
    if (context === null) throw new Error("useUsersContext must be used within a UsersContextProvider");
    return context
}