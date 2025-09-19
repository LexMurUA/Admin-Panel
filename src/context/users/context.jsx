import { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToUsers, changeUser } from '../../features/users/usersSlise';
import { useNavigate } from 'react-router-dom'

const usersContext = createContext(null)

export const UsersContextProvider = ({ children }) => {
    const { list } = useSelector(state => state.users)
    //HOOKS===
    const [change, setChange] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const methodsAddUser = useForm()
    const { id } = useParams()
    const dispatch = useDispatch()
    const [modalStatus, setModalStatus] = useState(false)
    const [selectedId,setSelectedId] =useState(null)
    const navigate = useNavigate()
    const [actionForm,setActionForm] =useState(null)
    //Pagination
    const perPage = 20
    const startIndex = 0
    const [endIndex, setEndIndex] = useState(perPage)

    //FUNCTIONS===
    const onSubmit = (data, action) => {
        const { login, password, email } = data
        if (action==='change'){
            dispatch(changeUser({ id, login, password, email }))
            setChange(false)
        }
        if (action==='add'){
            dispatch(addToUsers({id:list.length,login,password,email}))
            
        }
    }
    const getUser = (list, id) => list.find(user => user.id === id)

    return (
        <usersContext.Provider value={{ change, navigate,actionForm,setActionForm, setChange, currentUser, setCurrentUser, methodsAddUser, id, onSubmit, getUser, list, dispatch, endIndex, setEndIndex, perPage, startIndex, modalStatus, setModalStatus, selectedId, setSelectedId }}>
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