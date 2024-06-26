import React, { useEffect, useReducer } from 'react';
import reducer from './reducer';
import context from './context';
import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_SUB_TOTAL, CALCULATE_TOTAL, INCREASE_QUANTITY, DECREASE_QUANTITY } from './types';

const State = ({ children }) => {

    const initialState = {
        item: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        subTotalPrice: 0,
        totalPrice: 0,
        shippingPrice: 4.00
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(state.item))

    }, [state.item])


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

    console.log('cart state', JSON.parse(localStorage.getItem('cart')))
    return (
        <context.Provider value={{
            item: state.item,
            subTotalPrice: state.subTotalPrice,
            totalPrice: state.totalPrice,
            shippingPrice: state.shippingPrice,
            addToCart,
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
