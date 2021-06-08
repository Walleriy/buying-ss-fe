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

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.product.price * item.amount, 0)
            .toLocaleString("UAH");
    };

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper blue nav__container darken-1" style={{ padding: '0 2 rem' }}>
                <span className="nav__logo">Помічник вибору</span>
                <ul id="nav-mobile" className="right">
                    <li>
                        <NavLink to="/">Головна</NavLink>
                    </li>
                    <li>
                        <NavLink to="/processors">Процесори</NavLink>
                    </li>
                    <li>
                        <NavLink to="/videocards">Відеокарти</NavLink>
                    </li>
                    <li><NavLink to="/about">Про нас</NavLink></li>
                    <li><NavLink to="/cart" className="cart__link1">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="cartlogo__badge1">{getCartCount()}</span>
                            <span className="cartlogo__badge2">{getCartSubTotal()} грн</span>
                        </NavLink>
                    </li>
                    <li><a href="/" onClick={logoutHandler}>Вийти</a></li>
                </ul>
            </div>
        </nav>
    )
}
