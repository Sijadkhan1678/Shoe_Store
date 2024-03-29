import { GET_BRAND_PRODUCTS, ADD_TO_CART, OPEN_MODAL, CLOSE_MODAL, ADD_PRODUCT, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CHANGE_BRAND } from './Types';

const AppReducer = (state, action) => {

    state.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    switch (action.type) {

        case GET_BRAND_PRODUCTS:

            return {
                ...state, brandProducts: state.products.filter(product => product.brand === action.payload),
                selectedBrand: action.payload
            }

        case ADD_PRODUCT:

            return { ...state, product: action.payload }

        case OPEN_MODAL:

            return { ...state, modalOpen: true }


        case CLOSE_MODAL:

            return { ...state, product: null, modalOpen: false }

        case ADD_TO_CART:

            const product = state.cart.find(product => product.id === action.payload.id);

            if (!product) {

                return { ...state, cart: [...state.cart, { ...action.payload }] }

            }

            else {

                product.quantity++
                return state
            }

        case REMOVE_FROM_CART:

            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }

        case INCREASE_QUANTITY:

            return {

                ...state, cart: state.cart.map(product => product.id !== action.payload ? product : { ...product, quantity: product.quantity + 1 })

            }
        case DECREASE_QUANTITY:

            if (action.payload.quantity > 1)

                return {
                    ...state, cart: state.cart.map(product => product.id !== action.payload.id ? product : { ...product, quantity: action.payload.quantity - 1 })
                }
            return state

        case CHANGE_BRAND:
            return {
                ...state, selectedBrand: action.payload
            }

        default:
            return state
    }

}

export default AppReducer;
