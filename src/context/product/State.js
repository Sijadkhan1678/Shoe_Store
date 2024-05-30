import React, { useReducer } from 'react';
import reducer from './reducer';
import context from './context';
import shoesList from '../data'
import { GET_BRAND_PRODUCTS, CHANGE_BRAND } from './types';

const State = ({ children }) => {

    const initialState = {
        products: shoesList,
        filterProducts: [],
        currentBrand: 'All',
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    //function get Brand products 
    const getBrandProducts = (brand) => { dispatch({ type: GET_BRAND_PRODUCTS, payload: brand }) }

    // function to change brand name 
    const changeBrand = (brand) => { dispatch({ type: CHANGE_BRAND, payload: brand }) }

    console.log('appState')
    return (
        <context.Provider value={{
            products: state.products,
            currentBrand: state.currentBrand,
            filterProducts: state.filterProducts,
            getBrandProducts,
            changeBrand,

        }}>
            {children}
        </context.Provider>
    )

}

export default State;