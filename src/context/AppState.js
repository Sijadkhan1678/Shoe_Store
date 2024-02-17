import React, { useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';
import context from './AppContext';
import shoesList from './Data'
import { GET_BRAND_PRODUCTS, ADD_TO_CART, ADD_PRODUCT,OPEN_MODAL, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CHANGE_BRAND } from './Types';

const AppState = ({ children }) => {

    const initalState = {
        products: shoesList,
        brandProducts: [],
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        selectedBrand: 'Home',
        modal:false,
        product:null
    }


    const [state, dispatch] = useReducer(AppReducer, initalState);


    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(state.cart))

    }, [state.cart])



    //function get Brand products 
    const getBrandProducts = (brand) => {
        console.log(brand)
        dispatch({
            type: GET_BRAND_PRODUCTS,
            payload: brand
        })
    }
    const handleModal = (isOpen) => { dispatch({type:OPEN_MODAL,payload:isOpen}) }
    const addProduct = (product) => {
        console.log(product)
       handleModal(true)
       dispatch({type:ADD_PRODUCT,payload:product}) 
    }

    // function add to cart product
    const addToCart = (product) => {

        dispatch({
            type: ADD_TO_CART,
            payload: { ...product, quantity: 1 }
        })

    }

    // function remove from cart product
    const removeFromCart = id => {

        dispatch({
            type: REMOVE_FROM_CART,
            payload: id
        })
    }

    // function to increase Item qunatity in cart 
    const increaseQuantity = id => {

        dispatch({
            type: INCREASE_QUANTITY,
            payload: id
        })
    }
    // function to decrease productItem qunatity in cart 
    const decreaseQuantity = ({ id, quantity }) => {

        dispatch({
            type: DECREASE_QUANTITY,
            payload: { id, quantity }
        })

    }

    // function to change brand name 
    const changeBrand = (brand) => {
        dispatch({
            type: CHANGE_BRAND,
            payload: brand
        })
    }
    console.log('state',state.modal)
    return (
        <context.Provider value={{
            products: state.products,
            product: state.product,
            modal: state.modal,
            cart: state.cart,
            selectedBrand: state.selectedBrand,
            brandProducts: state.brandProducts,
            getBrandProducts,
            addProduct,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            changeBrand,
            handleModal
        }}>
            {children}
        </context.Provider>
    )

}

export default AppState;
