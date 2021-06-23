import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { commerce } from './lib/commerce';
import { Homepage, Products, Navbar, Cart } from './components';
import './styles.sass';

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

    const addToCart = async (productID, productName, quantity) =>
    {
        const { cart } = await commerce.cart.add(productID, quantity);
        setCart(cart);
        notify("success", `${productName} added to cart`)
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

    const notify = (type, message) =>
    {
        switch (type)
        {
            case 'success':
                toast.success(message);
                break;
            default: return null;
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <Router>
            <div>
                <Navbar cart={cart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />
                <Switch>
                    <Route exact path="/">
                        <Homepage products={products} />
                    </Route>
                    <Route exact path="/phones">
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
            <ToastContainer
                position="bottom-center"
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Router>
    )
}

export default App;
