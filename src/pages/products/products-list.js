import "./products-list.css";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./product-card/product-card";
import { getAllProducts } from "../../redux/product/product.actions";
import {Loader} from "../../components/loader/Loader";
import {useParams} from "react-router-dom";
import {Filters} from "../../components/filters/Filters";

const ProductsList = () => {
    const dispatch = useDispatch();
    const {products, loading, error} = useSelector(state => state.products);
    const [sort, setSort] = useState('scorePrice inc')

    const onSortChange = (e) => {
        setSort(e.target.value)
    }

    const category = useParams().category

    useEffect(() => {
        const params = new URLSearchParams({
            category,
            sort
        })
        dispatch(getAllProducts(params))
    }, [dispatch, category, sort])

    const elements = products.map((product) => (
        <ProductCard
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            productId={product._id}
        />
    ))

    if (loading) {
        return <Loader/>
    }

    if (error) {
        return <h4>{error}</h4>
    }
    return (
        <div className="homescreen">
            {category === 'processors' && <h2 className="homescreen__title">Процесори</h2>}
            {category === 'videocards' && <h2 className="homescreen__title">Відеокарти</h2>}
            <Filters type={sort} onChange={onSortChange}/>
            <div className="homescreen__products">
                {elements}
            </div>
        </div>
    );
};

export default ProductsList;
