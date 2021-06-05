import "./cart-list.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./cart-item/cart-item";


const CartScreen = () => {

    const { cartItems } = useSelector((state) => state.cart);

    useEffect(() => {}, []);

    const getCartCount = () => {
        return cartItems.reduce((totalAmount, item) => Number(item.amount) + totalAmount, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.product.price * item.amount, 0)
            .toFixed(2);
    };

    return (
        <>
            <div className="cartscreen">
                <div className="cartscreen__left">
                    <h2>Кошик</h2>

                    {cartItems.length === 0 ? (
                        <div>
                            Ваш кошик порожній
                            <div>
                                <Link to="/products">Повернутись до списку товарів</Link>
                            </div>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <CartItem
                                key={item.product._id}
                                item={item.product}
                                amount={item.amount}
                            />
                        ))
                    )}
                </div>

                <div className="cartscreen__right">
                    <div className="cartscreen__info">
                        <p>Загалом {getCartCount()} одиниць товарів</p>
                        <p>Загальна вартість: {getCartSubTotal()} грн</p>
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
