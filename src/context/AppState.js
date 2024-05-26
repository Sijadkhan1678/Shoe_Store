import React, { useReducer } from 'react';
import AppReducer from './AppReducer';
import context from './AppContext';
import shoesList from './data'
import { GET_BRAND_PRODUCTS, CHANGE_BRAND } from './types';

const AppState = ({ children }) => {

    const initialState = {
        products: shoesList,
        brandProducts: [],
        selectedBrand: 'Home',
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //function get Brand products 
    const getBrandProducts = (brand) => { dispatch({ type: GET_BRAND_PRODUCTS, payload: brand }) }

    // function to change brand name 
    const changeBrand = (brand) => { dispatch({ type: CHANGE_BRAND, payload: brand }) }

    console.log('appState')
    return (
        <context.Provider value={{
            products: state.products,
            selectedBrand: state.selectedBrand,
            brandProducts: state.brandProducts,
            getBrandProducts,
            changeBrand,

        }}>
            {children}
        </context.Provider>
    )

}

export default AppState;