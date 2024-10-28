import React, { useReducer, useEffect } from 'react';
import reducer from './reducer';
import context from './context';
import shoesList from '../data'
import { FILTER_BRAND, FILTER_PRICE, FILTER_SIZE, OPEN_DRAWER, CLOSE_DRAWER, REMOVE_FILTER } from './types';

const State = ({ children }) => {

    const initialState = {
        products: shoesList,
        activeFilters: [],
        filterProducts: [],
        open: false
    }


    const [state, dispatch] = useReducer(reducer, initialState);

    const filterBrand = (brand) => {

        dispatch({ type: FILTER_BRAND, payload: brand })
    }

    const filterPrice = (range) => {

        dispatch({ type: FILTER_PRICE, payload: range })
    }

    const filterSize = (size) => {

        dispatch({ type: FILTER_SIZE, payload: size })
    }

    const removeFilter = (filter) => {

        dispatch({ type: REMOVE_FILTER, payload: filter })
    }

    const openDrawer = () => {

        dispatch({ type: OPEN_DRAWER })
    }

    const closeDrawer = () => {
        
        dispatch({ type: CLOSE_DRAWER })
    }
    console.log('filterProduct:::', state.filterProducts, "activeFilters:::", state.activeFilters)
    
    return (
        <context.Provider value={{
            products: state.products,
            activeFilters: state.activeFilters,
            filterProducts: state.filterProducts,
            filterBrand,
            filterPrice,
            filterSize,
            removeFilter,
            open: state.open,
            openDrawer,
            closeDrawer
        }}>
            {children}
        </context.Provider>
    )

}

export default State;