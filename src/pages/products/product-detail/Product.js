import "./Product.css"
import React, {useState, useEffect, useCallback} from "react"
import {useDispatch} from "react-redux"
import {addProductToCart} from "../../../redux/cart/cart.actions"
import { useParams, useHistory } from "react-router-dom"
import {Loader} from "../../../components/loader/Loader"
import {useHttp} from "../../../hooks/http.hook"

const ProductDetail = () => {
    const history = useHistory()
    const [product, setProduct] = useState(null)
    const [qty, setQty] = useState(1)
    const {request, loading, error} = useHttp()
    const dispatch = useDispatch()
    const productId = useParams().id

    const getProduct = useCallback(async () => {
        try {
            const item = await request(`/api/products/${productId}`)
            setProduct(item)
        } catch (e) {
        }
    }, [productId, request])

    useEffect(() => {
        getProduct()
    }, [getProduct])

    const addProductToCartHandler = () => {
        dispatch(addProductToCart(product._id, qty))
        history.push(`/cart`);
    };

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="productscreen">
            {error ? (
                <h2>{error}</h2>
            ) : (!loading && product &&
                <>
                    <div className="productscreen__left">
                        <div className="left__image">
                            <img src={product.imageUrl} alt={product.name}/>
                        </div>
                        <div className="left__info">
                            <p className="left__name">{product.name}</p>
                            <p>Ціна: {product.price} грн</p>
                            <p>Кількість: {product.countInStock}</p>
                            <p>Рівень потужності: {product.score}%</p>
                            <p>
                                Опис:
                                <pre>{product.description}</pre>
                            </p>
                        </div>
                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p>
                                Ціна:
                                <span>{product.price} грн</span>
                            </p>
                            <p>
                                Статус:
                                <span>
                  {product.countInStock > 0 ? "Товар є в наявності" : "Товар відсутній"}
                </span>
                            </p>
                            <p>
                                Кількість:
                                <div className="productscreen__quantity">
                                <input
                                    type="number"
                                    min="1"
                                    max={product.countInStock}
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                />
                                    /{product.countInStock}
                                </div>
                            </p>
                            <p>
                                <button type="button" onClick={addProductToCartHandler}>
                                    Додати в кошик
                                </button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductDetail
