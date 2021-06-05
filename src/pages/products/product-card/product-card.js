import "./product-card.css";
import {Link} from "react-router-dom";

const ProductCard = ({ imageUrl, description, price, name, productId }) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name} />

            <div className="product__info">
                <p className="info__name">{name}</p>

                <p className="info__description">{description.substring(0, 100)}...</p>

                <p className="info__price">{price} грн</p>

                <Link to={`/products/${productId}`} className="info__button">Переглянути</Link>
            </div>
        </div>
    );
};

export default ProductCard;
