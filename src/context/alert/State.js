import React from 'react'
import context from "./context";
import reducer from './reducer'
import { SET_ALERT, REMOVE_ALERT } from './types';

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
        }, 3000)
    }

    return (
        <context.Provider value={{
            message: state,
            setAlert,
            removeAlert
        }}>
            {children}
        </context.Provider>)
}

export default State