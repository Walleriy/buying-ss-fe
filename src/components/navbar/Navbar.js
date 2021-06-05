import {NavLink, useHistory} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import "./Navbar.css";
import {useSelector} from "react-redux";

export const Navbar = () => {

    const { cartItems } = useSelector((state) => state.cart);
    const history = useHistory()
    const auth = useContext(AuthContext)
    const getCartCount = () => {
        return cartItems.reduce((totalAmount, item) => Number(item.amount) + totalAmount, 0);
    };

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2 rem' }}>
                <span className="brand-logo">Сервіс</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li><NavLink to="/create">Створити</NavLink></li>
                    <li><NavLink to="/links">Посилання</NavLink></li>
                    <li><NavLink to="/cart" className="cart__link1">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="cartlogo__badge1">{getCartCount()}</span>
                        </NavLink>
                    </li>
                    <li><a href="/" onClick={logoutHandler}>Вийти</a></li>
                </ul>
            </div>
        </nav>
    )
}
