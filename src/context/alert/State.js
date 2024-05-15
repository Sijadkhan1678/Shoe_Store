import React from 'react'
import Context from "Context";
import reducer from './Reducer'
import { SET_ALERT, REMOVE_ALERT } from './constant';

export const State = ({ children }) => {

    const initialState = null
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const setAlert = (alert) => {

        dispatch({
            type: SET_ALERT,
            payload: alert
        })
    }
    const removeAlert = () => {

        dispatch({ type: REMOVE_ALERT })
    }

    return (
        <Context.Provider value={{
            alert: state,
            setAlert,
            removeAlert
        }}>
            {children}
        </Context.Provider>)
}

export default State