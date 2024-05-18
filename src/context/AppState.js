import React, { useReducer } from 'react';
import AppReducer from './AppReducer';
import context from './AppContext';
import shoesList from './Data'
import { GET_BRAND_PRODUCTS, ADD_PRODUCT, OPEN_MODAL, CLOSE_MODAL, CHANGE_BRAND } from './Types';

const AppState = ({ children }) => {

    const initialState = {
        products: shoesList,
        brandProducts: [],
        selectedBrand: 'Home',
        modalOpen: false,
        product: null
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //function get Brand products 
    const getBrandProducts = (brand) => { dispatch({ type: GET_BRAND_PRODUCTS, payload: brand }) }
    
    const openModal = () => { dispatch({ type: OPEN_MODAL }) }

    const closeModal = () => { dispatch({ type: CLOSE_MODAL }) }

    const addProduct = (product) => { dispatch({ type: ADD_PRODUCT, payload: product }) }

    // function to change brand name 
    const changeBrand = (brand) => { dispatch({ type: CHANGE_BRAND, payload: brand }) }

    console.log('appState')
    return (
        <context.Provider value={{
            products: state.products,
            product: state.product,
            modalOpen: state.modalOpen,
            selectedBrand: state.selectedBrand,
            brandProducts: state.brandProducts,
            getBrandProducts,
            addProduct,
            changeBrand,
            openModal,
            closeModal,
        }}>
            {children}
        </context.Provider>
    )

}

export default AppState;