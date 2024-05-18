import { ADD_TO_CART,REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CALCULATE_SUB_TOTAL, CALCULATE_TOTAL} from './Types';

const AppReducer = (state, action) => {

    state.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    switch (action.type) {

        
        case ADD_TO_CART:

            const product = state.cart.find(product => product.id === action.payload.id);

            if (!product) {

                return { ...state, cart: [...state.cart, { ...action.payload }] }

            }

            else {

                product.quantity++
                return { ...state }
            }

        case REMOVE_FROM_CART:

            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }

        case INCREASE_QUANTITY:

            return {

                ...state,
                cart: state.cart.map(product => product.id !== action.payload ? product : { ...product, quantity: product.quantity + 1 })
            }
        case DECREASE_QUANTITY:

            if (action.payload.quantity > 1)

                return {

                    ...state,
                    cart: state.cart.map(product => product.id !== action.payload.id ? product : { ...product, quantity: action.payload.quantity - 1 })
                }
            return state

        case CALCULATE_SUB_TOTAL:
            return {

                // ...state,
                // cart : { }

                // ...state.cart,
                // subTotalPrice: state.cart.item.reduce((total, product) => {

                //     return (product.price * product.quantity) + (product.quantity * state.cart.shippingPrice) + total;

                // }, 0)

            }
        case CALCULATE_TOTAL:
            return {

                // ...state,
                // cart: {}
                // {
                //     ...state.cart,
                //     totalPrice: state.cart.item.reduce((total, item) => (item.price * item.quantity) + total, 0)
                // }
            }

        default:
            return state
    }

}

export default AppReducer;
