import "./products-list.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./product-card/product-card";
import { getAllProducts } from "../../redux/product/product.actions";
import {Loader} from "../../components/loader/Loader";
import {useParams} from "react-router-dom";

const ProductsList = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);

    const categoryName = useParams().category
    let header;
    debugger
    if (categoryName === 'processors') {
        header = 'Процесори'
    } else {
        header = 'Відеокарти'
    }

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">{header}</h2>
            <div className="homescreen__products">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product) => (
                        <ProductCard
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            productId={product._id}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductsList;
