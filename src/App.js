import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products } from './components';

const App = () => 
{
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState({});
    // const [order, setOrder] = useState({});
    // const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () =>
    {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
        // fetchCart();
    }, []);

    return (
        <div>
            <Products products={products} />
        </div>
    )
}

export default App;
