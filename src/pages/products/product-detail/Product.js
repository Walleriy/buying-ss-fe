import "./Product.css"
import React, {useState, useEffect, useCallback} from "react"
import {useDispatch} from "react-redux"
import {addProductToCart} from "../../../redux/cart/cart.actions"
import {useParams} from "react-router-dom"
import {Loader} from "../../../components/loader/Loader";
import {useHttp} from "../../../hooks/http.hook";

const ProductDetail = () => {
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
                            <p>Кількість: ${product.countInStock}</p>
                            <p>Опис: <div>{product.description}</div></p>
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
                                <input
                                    type="number"
                                    min="1"
                                    max={product.countInStock}
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                />
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
