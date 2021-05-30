import {ADD_TO_CART, CART_RESET, REMOVE_FROM_CART} from "./cart.types";

const initialState = {
    cartItems: [{product: {_id: 'dsdsd', cost: 500}, amount: 2}, {product: {_id: 'dds', cost: 25}, amount: 3}]
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.product
            const amount = action.amount
            const existItem = state.cartItems.find(article => article.product._id === item._id)

            if (existItem) {
                const newItem = {...existItem, amount: (existItem.amount + amount)}

                const newArr = state.cartItems.filter(article => article.product._id !== item._id)
                return {
                    cartItems: [...newArr, newItem]
                }
            }

            const newItemInCart = {
                product: item,
                amount
            }
            return {
                cartItems: [...state.cartItems, newItemInCart]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(product => product._id !== action.payload),
            };
        case CART_RESET:
            return initialState
        default:
            return state
    }
}
