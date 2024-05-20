import { GET_BRAND_PRODUCTS, OPEN_MODAL, CLOSE_MODAL, ADD_PRODUCT, CHANGE_BRAND } from './Types';

const AppReducer = (state, action) => {

    switch (action.type) {

        case GET_BRAND_PRODUCTS:

            return {
                ...state,
                brandProducts: state.products.filter(product => product.brand === action.payload),
                selectedBrand: action.payload
            }

        case ADD_PRODUCT:

            return { ...state, product: action.payload }

        case OPEN_MODAL:

            return { ...state, modalOpen: true }

        case CLOSE_MODAL:

            return { ...state, product: null, modalOpen: false }

        case CHANGE_BRAND:
            return {
                ...state, selectedBrand: action.payload
            }

        default:
            return state
    }

}

export default AppReducer;
