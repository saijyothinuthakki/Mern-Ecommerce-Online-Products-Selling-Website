import { getAllProductsReducer,getProductByIdReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import {combineReducers} from "redux"
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { registerNewUserReducer } from "./reducers/userReducer";
import { loginReducer } from "./reducers/userReducer";



const finalReducer= combineReducers({
     getAllProductsReducer : getAllProductsReducer,
     getProductByIdReducer : getProductByIdReducer,
     cartReducer : cartReducer,
     registerNewUserReducer : registerNewUserReducer,
     loginReducer : loginReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]
 const currentUser =localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null
const initialState = {
  cartReducer : {cartItems : cartItems},
  loginReducer:{currentUser:currentUser}
}
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store=createStore(finalReducer,initialState,composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))

  export default store