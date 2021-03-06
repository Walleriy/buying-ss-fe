import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import {Links} from "../pages/links/Links"
import {Create} from "../pages/create/Create"
import {Detail} from "../pages/detail/Detail"
import {Auth} from "../pages/auth/Auth"
import {Home} from "../pages/home/home"
import Cart from "../pages/cart/cart-list"
import ProductsList from "../pages/products/products-list"
import ProductDetail from "../pages/products/product-detail/Product"

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <Links />
                </Route>
                <Route path="/create" exact>
                    <Create />
                </Route>
                <Route path="/detail/:id">
                    <Detail />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products" exact>
                    <ProductsList />
                </Route>
                <Route path="/products/:id">
                    <ProductDetail />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <Auth />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
