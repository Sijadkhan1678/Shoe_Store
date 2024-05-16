import React from 'react'
import Context from "./Context";
import reducer from './Reducer'
import { SET_ALERT, REMOVE_ALERT } from './constant';

export const State = ({ children }) => {

    const initialState = null
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const setAlert = (message) => {

        dispatch({
            type: SET_ALERT,
            payload: message
        })
    }
    const removeAlert = () => {

        setTimeout(() => {
            dispatch({ type: REMOVE_ALERT })
        },3000)
    }

    return (
        <Context.Provider value={{
            message: state,
            setAlert,
            removeAlert
        }}>
            {children}
        </Context.Provider>)
}

export default State