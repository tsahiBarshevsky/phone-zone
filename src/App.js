import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';

const App = () => 
{
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    // const [order, setOrder] = useState({});
    // const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () =>
    {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () =>
    {
        setCart(await commerce.cart.retrieve());
    }

    const addToCart = async (productID, quantity) =>
    {
        const { cart } = await commerce.cart.add(productID, quantity);
        setCart(cart);
    }

    const updateCartQuantity = async (productID, quantity) =>
    {
        const { cart } = await commerce.cart.update(productID, {quantity});
        setCart(cart);
    }

    const removeFromCart = async (productID) =>
    {
        const { cart } = await commerce.cart.remove(productID);
        setCart(cart);
    }

    const emptyCart = async () =>
    {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <Router>
            <div>
                <Navbar cart={cart} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={addToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                            cart={cart}
                            updateCartQuantity={updateCartQuantity}
                            removeFromCart={removeFromCart}
                            emptyCart={emptyCart} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
