import React, {useReducer} from 'react';
import AppReducer from './AppReducer';
import context from './AppContext';
import shoesList from './data'
const AppState = ({children}) => {
  
  const initalState = {
       products: shoesList ,
       brandProducts:[],
       carts:[],
       selectedBrand: 'Home'
  }
  
  const [state,dispatch] = useReducer(AppReducer,initalState);
  
  console.log(state.products)
  //function  get Brand products 
  
  
  return (
       <context.Provider value={{
         
       }}>
       {children}
       </context.Provider>
    )
  
}

export default AppState;