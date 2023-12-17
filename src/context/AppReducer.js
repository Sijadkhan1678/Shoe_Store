import { GET_BRAND_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CHANGE_BRAND } from './Types';

const AppReducer = (state, action) => {
  
  switch (action.type) {

    case GET_BRAND_PRODUCTS:

      return {
        ...state, brandProducts: state.products.filter(product => product.brand === action.payload),
        selectedBrand: action.payload
      }

    case ADD_TO_CART:

      const productIds = state.cart.map(product => product.id);
      const isIdExsist = productIds.find(id => id === action.payload.id);
      
      if (!isIdExsist) { 
        
        return { ...state, cart: [...state.cart, { ...action.payload }] }

      }

      else {

        return {

          ...state, cart: state.cart.map(product => product.id !== isIdExsist ? product : { ...product, quantity: product.quantity + 1 })
        }

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

    case CHANGE_BRAND:
      return {
        ...state, selectedBrand: action.payload
      }

    default:
      return state
  }

}

export default AppReducer;