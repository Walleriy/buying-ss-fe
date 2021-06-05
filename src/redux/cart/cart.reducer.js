import {ADD_TO_CART, CART_RESET, REMOVE_FROM_CART, SET_ITEM_AMOUNT} from "./cart.types";

const initialState = {
    cartItems: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.product
            const { amount } = action
            const existItem = state.cartItems.find(article => article.product._id === item._id)

            if (existItem) {
                return {
                    cartItems: state.cartItems.map(article => {
                        if(item._id === article.product._id) {
                            article.amount = Number(article.amount) + Number(amount)
                        }
                        return article
                    })
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
                cartItems: state.cartItems.filter(item => item.product._id !== action.payload)
            };
        case SET_ITEM_AMOUNT:
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if(action.id === item.product._id) {
                        item.amount = action.amount
                    }
                    return item
                })
            };
        case CART_RESET:
            return initialState
        default:
            return state
    }
}
