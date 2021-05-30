import { combineReducers} from "redux"
import {cartReducer} from "./cart/cart.reducer";
import {productsReducer} from "./product/product.reducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
})
