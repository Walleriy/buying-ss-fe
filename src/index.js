import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './components/app/App'
import '@fontsource/roboto'
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import {rootReducer} from "./redux/root.reducer"

const INITIAL_STATE = {
    cart: {
        cartItems: localStorage.getItem("cart") ?
            JSON.parse(localStorage.getItem("cart")) : []
    }
}

const store = createStore(
    rootReducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
