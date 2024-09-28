import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CALCULATE_SUB_TOTAL, CALCULATE_TOTAL, OPEN_DRAWER, CLOSE_DRAWER } from './types';

const AppReducer = (state, action) => {

    switch (action.type) {

        case ADD_TO_CART:

            const product = state.items.find(product => product.id === action.payload.id);

            if (!product) {

                return { ...state, items: [...state.items, { ...action.payload }] }
            }

            else {

                product.quantity++
                return { ...state }
            }

        case REMOVE_FROM_CART:

            return { ...state, items: state.items.filter(item => item.id !== action.payload) }

        case INCREASE_QUANTITY:

            return {
                ...state,
                items: state.items.map(product => product.id !== action.payload ? product : { ...product, quantity: product.quantity + 1 })
            }
        case DECREASE_QUANTITY:

            if (action.payload.quantity > 1)

                return {

                    ...state,
                    items: state.items.map(product => product.id !== action.payload.id ? product : { ...product, quantity: action.payload.quantity - 1 })
                }
            return state

        case CALCULATE_SUB_TOTAL:
            return {

                ...state,
                subTotalPrice: state.items.reduce((total, item) => (item.price * item.quantity) + total, 0)
            }
        case CALCULATE_TOTAL:
            return {
                ...state,
                totalPrice: state.items.reduce((total, product) => {

                    return (product.price * product.quantity) + (product.quantity * state.shippingPrice) + total;

                }, 0)
            }
        case OPEN_DRAWER:
            return { 
                ...state,
                open:true
            }
            case CLOSE_DRAWER:
                return {
                    ...state,
                    open:false
                }
        default:
            return state
    }

}

export default AppReducer;
