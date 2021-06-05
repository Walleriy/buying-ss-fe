import "./cart-item.css";
import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, setItemAmount } from "../../../redux/cart/cart.actions";

const CartItem = ({ item, amount }) => {

    const [qty, setQty] = useState(amount)

    const dispatch = useDispatch()

    const qtyChangeHandler = (e) => {
        debugger
        setQty(e.target.value)
        dispatch(setItemAmount(item._id, e.target.value))
    }

    useEffect(() => {
        setQty(amount)
    }, [amount])

    const removeFromCartHandler = () => {
        dispatch(removeFromCart(item._id));
    };

    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <Link to={`/products/${item._id}`} className="cartItem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">{item.price} грн</p>
            <div className="productscreen__quantity">
                <input
                    type="number"
                    min="1"
                    value={qty}
                    max={item.countInStock}
                    onChange={qtyChangeHandler}
                />
                /{item.countInStock}
            </div>
            <button
                className="cartItem__deleteBtn"
                onClick={removeFromCartHandler}
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default CartItem;
