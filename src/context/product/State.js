import React, { useReducer } from 'react';
import reducer from './reducer';
import context from './context';
import shoesList from '../data'
import { FILTER_PRODUCTS, CHANGE_BRAND,OPEN_DRAWER,CLOSE_DRAWER } from './types';

const State = ({ children }) => {

    const initialState = {
        products: shoesList,
        activeFilters: [],
        filterProducts: [],
        open: false
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('active state::', state.activeFilters)
    //function get Brand products 
    const filterProducts = (filter) => { dispatch({ type: FILTER_PRODUCTS, payload: filter }) }

    // function to change brand name 
    const changeBrand = (brand) => { dispatch({ type: CHANGE_BRAND, payload: brand }) }
    const openDrawer = () => {
        dispatch({ type: OPEN_DRAWER })
    }
    const closeDrawer = () => {
        dispatch({ type: CLOSE_DRAWER })
    }
    return (
        <context.Provider value={{
            products: state.products,
            activeFilters: state.activeFilters,
            filterProducts: state.filterProducts,
            open:state.open,
            changeBrand,
            openDrawer,
            closeDrawer
        }}>
            {children}
        </context.Provider>
    )

}

export default State;