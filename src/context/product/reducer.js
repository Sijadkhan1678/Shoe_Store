import { GET_BRAND_PRODUCTS, CHANGE_BRAND } from './types';

const reducer = (state, action) => {

    switch (action.type) {

        case GET_BRAND_PRODUCTS:

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

        default:
            return state
    }

}

export default reducer;
