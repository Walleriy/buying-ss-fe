import "./cart-list.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./cart-item/cart-item";
import { addProductToCart, removeFromCart } from "../../redux/cart/cart.actions";


const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {}, []);

    const qtyChangeHandler = (id, qty) => {
        dispatch(addProductToCart(id, qty));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.price * item.qty, 0)
            .toFixed(2);
    };

    return (
        <>
            <div className="cartscreen">
                <div className="cartscreen__left">
                    <h2>Shopping Cart</h2>

                    {cartItems.length === 0 ? (
                        <div>
                            Your Cart Is Empty <Link to="/">Go Back</Link>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <CartItem
                                key={item.product}
                                item={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeHandler={removeFromCartHandler}
                            />
                        ))
                    )}
                </div>

                <div className="cartscreen__right">
                    <div className="cartscreen__info">
                        <p>Subtotal ({getCartCount()}) items</p>
                        <p>${getCartSubTotal()}</p>
                    </div>
                    <div>
                        <button>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartScreen;