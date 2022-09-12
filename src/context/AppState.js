import React, {useReducer} from 'react';
import AppReducer from './AppReducer';
import context from './AppContext';

const AppState = ({children}) => {
  
  const initalState = {
       products: [] ,
       brandProducts:[],
       carts:[],
       selectedBrand: 'Home'
  }
  
  const [state,dispatch] = useReducer(AppReducer,initalState);
  
  //function  get Brand products 
  
  
  return (
       <context.Provider value={{
         
       }}>
       {children}
       </context.Provider>
    )
  
}

export default AppState;