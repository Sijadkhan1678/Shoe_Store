import { GET_BRAND_PRODUCTS, CHANGE_BRAND } from './Types';

const AppReducer = (state, action) => {

    switch (action.type) {

        case GET_BRAND_PRODUCTS:

            return {
                ...state,
                brandProducts: state.products.filter(product => product.brand === action.payload),
                selectedBrand: action.payload
            }

        case CHANGE_BRAND:
            return {
                ...state, selectedBrand: action.payload
            }

        default:
            return state
    }

}

export default AppReducer;
