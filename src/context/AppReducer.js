import {GET_BRAND_PRODUCTS,ADD_TO_CART,REMOVE_FROM_CART,INCREASE_QUANTITY,DECREASE_QUANTITY, CHANGE_BRAND} from './Types';

const AppReducer = (state,action) => {
  switch (action.type) {
    case GET_BRAND_PRODUCTS:
      return {
 ...state,brandProducts: state.products.filter(product => product.brand === action.payload),
    selectedBrand:action.payload
      }
  
      case ADD_TO_CART:
      //  console.log(...action.payload)
        return {
        ...state,cart: [...state.cart,action.payload]
        }
      case REMOVE_FROM_CART:
        return {
        ...state, cart: state.cart.filter(item=> item.id !== action.payload)
        }
      case INCREASE_QUANTITY:
        return {
          ...state,cart: state.cart.filter(item=> item.id !== action.payload ? item: item.quantity++ )
          
        }
      case DECREASE_QUANTITY:
        return {
          ...state,cart: state.cart.filter(item=> item.id !== action.payload ? item: item.quantity-- )
        }
      case CHANGE_BRAND:
        return {
          ...state, selectedBrand: action.payload
        }
    default:
     return  state
  }
  
}

export default AppReducer;
