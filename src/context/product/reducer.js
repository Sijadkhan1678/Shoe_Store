import { FILTER_BRAND, FILTER_PRICE, FILTER_SIZE,REMOVE_FILTER, OPEN_DRAWER, CLOSE_DRAWER } from './types';

const reducer = (state, action) => {

    switch (action.type) {

        case FILTER_BRAND:
            return {
                ...state,
                filterProducts: [...state.filterProducts,...state.products.filter(product => product.brand === action.payload)],
                activeFilters: [...state.activeFilters,action.payload]
            }
        case FILTER_PRICE:
            return {      
                 ...state,
                 filterProducts: state.products.filter(product => product.price > action.payload.min && product.price <= action.payload.max),
                 activeFilters: [...state.activeFilters,action.payload.min+" - "+action.payload.max]
            }
        case FILTER_SIZE:
            return {
                ...state,
                // filterProducts:
            }
        case REMOVE_FILTER:
            return {
                ...state,
                filterProducts: state.filterProducts.filter(product => product.brand !== action.payload),
                activeFilters: state.activeFilters.filter(filter => filter !== action.payload)
            }    
        case OPEN_DRAWER:
            return {
                ...state,
                open: true
            }

        case CLOSE_DRAWER:
            return {
                ...state,
                open: false
            }

        default:
            return state
    }

}

export default reducer;
