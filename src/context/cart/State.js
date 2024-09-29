import React, { useEffect, useReducer } from 'react';
import reducer from './reducer';
import context from './context';
import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_SUB_TOTAL, CALCULATE_TOTAL, INCREASE_QUANTITY, DECREASE_QUANTITY, OPEN_DRAWER, CLOSE_DRAWER } from './types';

const State = ({ children }) => {

    const initialState = {
        items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        subTotalPrice: 0,
        totalPrice: 0,
        shippingPrice: 4.00,
        open: false
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(state.items))

    }, [state.items])


    // function add to cart product
    const addToCart = (product, viewType = undefined) => {

        if (viewType) {

            dispatch({ type: ADD_TO_CART, payload: product })

        } else {

            dispatch({ type: ADD_TO_CART, payload: { ...product, quantity: 1 } })
        }

    }

    // function remove from cart product
    const removeFromCart = id => {

        dispatch({ type: REMOVE_FROM_CART, payload: id })
    }

    // function to increase Item qunatity in cart 
    const increaseQuantity = id => {

        dispatch({ type: INCREASE_QUANTITY, payload: id })
    }
    // function to decrease productItem qunatity in cart 
    const decreaseQuantity = ({ id, quantity }) => {

        dispatch({ type: DECREASE_QUANTITY, payload: { id, quantity } })

    }
    const calculateSubTotal = () => {

        dispatch({ type: CALCULATE_SUB_TOTAL, })
    }

    const calculateTotal = () => {

        dispatch({ type: CALCULATE_TOTAL })
    }

    const openDrawer = () => {
        dispatch({ type: OPEN_DRAWER })
    }
    const closeDrawer = () => {
        // console.log('close Drawer')
        dispatch({ type: CLOSE_DRAWER })
    }
    console.log('open', state.open)
    return (
        <context.Provider value={{
            open:state.open,
            items: state.items,
            subTotalPrice: state.subTotalPrice,
            totalPrice: state.totalPrice,
            shippingPrice: state.shippingPrice,
            addToCart,
            openDrawer,
            closeDrawer,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            calculateSubTotal,
            calculateTotal,
        }}>
            {children}
        </context.Provider>
    )

}

export default State;
