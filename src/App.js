import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { commerce } from './lib/commerce';
import { Homepage, Products, Accessories, Navbar, Cart, Checkout, BackToTopButton, ScrollToTop } from './components';
import './styles.sass';

const App = () => 
{
    const [phones, setPhones] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [numberOfOrders, setNumberOfOrders] = useState(0);
    
    const fetchNumberOfOrders = async () =>
    {
        const url = new URL("https://api.chec.io/v1/orders");
        let headers = 
        {
            "X-Authorization": `${process.env.REACT_APP_CHEC_SECRET_KEY}`,
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
        fetch(url, 
        {
            method: "GET",
            headers: headers,
        })
        .then(response => response.json())
        .then(json => setNumberOfOrders(json.data.length));
    }

    const fetchPhones = async () =>
    {
        const { data } = await commerce.products.list({category_slug: ['phones']});
        setPhones(data);
    }
    
    const fetchAccessories = async () =>
    {
        const { data } = await commerce.products.list({category_slug: ['accessories']});
        setAccessories(data);
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

    const refreshCart = async () => 
    {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    const captureCheckout = async (checkoutTokenID, newOrder) =>
    {
        try 
        {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenID, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        } 
        catch (error)
        {
            setErrorMessage(error.data.error.message);
        }
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
        fetchPhones();
        fetchAccessories();
        fetchCart();
        fetchNumberOfOrders();
    }, []);

    return (
        <Router>
            {phones.length > 0 && accessories.length > 0 ?
            <div>
                <Navbar cart={cart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />
                <BackToTopButton showBelow={100} />
                <ScrollToTop />
                <Switch>
                    <Route exact path="/">
                        <Homepage phones={phones} accessories={accessories} numberOfOrders={numberOfOrders} />
                    </Route>
                    <Route exact path="/phones">
                        <Products phones={phones} onAddToCart={addToCart} />
                    </Route>
                    <Route exact path="/accessories">
                        <Accessories accessories={accessories} onAddToCart={addToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                            cart={cart}
                            updateCartQuantity={updateCartQuantity}
                            removeFromCart={removeFromCart}
                            emptyCart={emptyCart} />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout 
                            cart={cart} 
                            order={order} 
                            captureCheckout={captureCheckout}
                            error={errorMessage} />
                    </Route>
                </Switch>
            </div>
            :
            <div className="loading-animation">
                <Loader
                    type="BallTriangle"
                    color="#0c6961"
                    height={100}
                    width={100}
                />
                <h3>Loading...</h3>
            </div>}
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
