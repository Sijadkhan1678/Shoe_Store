import React from 'react'
import { OPEN_MODAL, CLOSE_MODAL, ADD_PRODUCT, } from './types';
import { context } from './index'
import reducer from './reducer'

const State = ({ children }) => {

    const initialState = {
        open: false,
        product: null
    }

    const [state, dispatch] = React.useReducer(reducer, initialState)

    const openModal = () => { dispatch({ type: OPEN_MODAL }) }

    const closeModal = () => { dispatch({ type: CLOSE_MODAL }) }

    const addProduct = (product) => { dispatch({ type: ADD_PRODUCT, payload: product }) }
    console.log('modal', state.open)

    return (
        <context.Provider value={{
            open: state.open,
            product: state.product,
            openModal,
            closeModal,
            addProduct
        }}>
            {children}
        </context.Provider>
    )
}


export default State