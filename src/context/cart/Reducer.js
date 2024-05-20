import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CALCULATE_SUB_TOTAL, CALCULATE_TOTAL } from './Types';

const AppReducer = (state, action) => {

    //  state.item = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    switch (action.type) {

        case ADD_TO_CART:

            const product = state.item.find(product => product.id === action.payload.id);

            if (!product) {

                return { ...state, item: [...state.item, { ...action.payload }] }
            }

            else {

                product.quantity++
                return { ...state }
            }

        case REMOVE_FROM_CART:

            return { ...state, item: state.item.filter(item => item.id !== action.payload) }

        case INCREASE_QUANTITY:

            return {
                ...state,
                item: state.item.map(product => product.id !== action.payload ? product : { ...product, quantity: product.quantity + 1 })
            }
        case DECREASE_QUANTITY:

            if (action.payload.quantity > 1)

                return {

                    ...state,
                    item: state.item.map(product => product.id !== action.payload.id ? product : { ...product, quantity: action.payload.quantity - 1 })
                }
            return state

        case CALCULATE_SUB_TOTAL:
            return {

                ...state,
                subTotalPrice: state.item.reduce((total, product) => {

                    return (product.price * product.quantity) + (product.quantity * state.shippingPrice) + total;

                }, 0)
            }
        case CALCULATE_TOTAL:
            return {
                ...state,
                totalPrice: state.item.reduce((total, item) => (item.price * item.quantity) + total, 0)
            }

        default:
            return state
    }

}

export default AppReducer;
