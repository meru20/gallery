import { createContext } from 'istanbul-lib-report';
import React, { useReducer } from 'react';
import instance from '../api/apiConfig';


const GET_PRODUCTS = 'GET_PRODUCTS';
const initialState = {
    products: [],
    getProducts: ()=>{},
    
}
const appReducer =(state,action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return{...state, products:action.products};
        default:
            return state;
    }
};
export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(appReducer,initialState)
    const getProducts = async () => {
       
            try{
                let {data} = await instance.get('/products.json?product_type=lipstick')
                dispatch({type: GET_PRODUCTS, data})
            }
            catch (e){
                console.log(e);
            }
    
        
        
    }
    return (
        <GlobalContext.Provider value ={{
            products:state.products,
            getProducts,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


// export const {Context,Provider} = createDataContext(
//     appReducer,{
//         getProducts,
//     },initialState
// )
