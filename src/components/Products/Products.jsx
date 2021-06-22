import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({products, onAddToCart}) => 
{
    const [value, setValue] = useState({min: 465, max: 1400});
    const classes = useStyles();

    const phonesBetweenRange = (phone) =>
    {
        return phone.price.raw >= value.min && phone.price.raw <= value.max;
    }

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.filter(phonesBetweenRange).map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.priceSlider}>
                <InputRange
                    minValue={465}
                    maxValue={1400}
                    value={value}
                    formatLabel={value => `$${value}`}
                    onChange={(value) => setValue(value)} />    
            </div>
        </main>
    )
}

export default Products;
