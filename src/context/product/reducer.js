import { FILTER_PRODUCTS, CHANGE_BRAND, OPEN_DRAWER, CLOSE_DRAWER } from './types';

const reducer = (state, action) => {

    switch (action.type) {

        case FILTER_PRODUCTS:

            return {
                ...state,
                filterProducts: state.products.filter(product => product.brand === action.payload),
                currentBrand: action.payload
            }

        case CHANGE_BRAND:
            return {
                ...state,
                currentBrand: action.payload
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
