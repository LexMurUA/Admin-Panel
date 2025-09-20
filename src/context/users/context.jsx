import { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToUsers, changeUser } from '../../features/users/usersSlise';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const usersContext = createContext(null)

export const UsersContextProvider = ({ children }) => {
    
    const { list } = useSelector(state => state.users)
    //HOOKS===
    const [change, setChange] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    
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
            console.log('change');
            
            dispatch(changeUser({ id, login, password, email }))
            setChange(false)
        }
        if (action==='add'){
            console.log('add');
            dispatch(addToUsers({ id: uuidv4(),login,password,email}))
            setModalStatus(false)
            
        }
    }
    const getUser = (list, id) => list.find(user => user.id === id)

    return (
        <usersContext.Provider value={{ change, navigate,actionForm,setActionForm, setChange, currentUser, setCurrentUser, id, onSubmit, getUser, list, dispatch, endIndex, setEndIndex, perPage, startIndex, modalStatus, setModalStatus, selectedId, setSelectedId }}>
           
                {children}
            
        </usersContext.Provider>
    )
}

export const UseUsersContext = () => {
    const context = useContext(usersContext)
    if (context === null) throw new Error("useUsersContext must be used within a UsersContextProvider");
    return context
}