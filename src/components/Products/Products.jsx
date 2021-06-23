import React, { useState, useEffect } from 'react';
import { Grid, Typography, Slider, FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({products, onAddToCart}) => 
{
    const [price, setPrice] = useState([0, 0]);
    const [borders, setBorders] = useState([0, 0]);
    const [brands, setBrands] = useState({
        samsung: false,
        apple: false,
        onePlus: false
    });
    const { samsung, apple, onePlus } = brands;
    const classes = useStyles();

    useEffect(() => {
        function getPricesRange()
        {
            var lowest = Number.POSITIVE_INFINITY;
            var highest = Number.NEGATIVE_INFINITY;
            var tmp;
            for (var i=products.length-1; i>=0; i--) 
            {
                tmp = products[i].price.raw;
                if (tmp < lowest) lowest = tmp;
                if (tmp > highest) highest = tmp;
            }
            setBorders([lowest, highest]);
            setPrice([lowest, highest]);
        }
        getPricesRange();
    }, [products]);

    const phonesBetweenRange = (phone) =>
    {
        return phone.price.raw >= price[0] && phone.price.raw <= price[1];
    }

    const handleRangeChange = (event, newPrice) => 
    {
        setPrice(newPrice);
    }

    const handleBrandChange = (event) => 
    {
        setBrands({ ...brands, [event.target.name]: event.target.checked });
    }

    // const phonseByManufacturer = (filter) =>
    // {
    //     products.filter(item => item.name.includes(filter));
    // }

    return (
        <main className={classes.main}>
            <div className={classes.toolbar} />
            <div className={classes.root}>
                <div className={classes.filters}>
                    <Typography className={classes.title} variant="h5">Phones filtering</Typography>
                    <Typography className={classes.typography} variant="h6">Price range</Typography>
                    <div className={classes.priceSlider}>
                        <Slider
                            min={borders[0]}
                            max={borders[1]}
                            value={price}
                            onChange={handleRangeChange} />
                    </div> 
                    <div className={classes.range}>
                        <Typography className={classes.caption} variant="caption">${price[0]}</Typography>
                        <Typography className={classes.caption} variant="caption">${price[1]}</Typography>
                    </div>
                    <div style={{marginTop: 20}} />
                    <Typography className={classes.typography} variant="h6">Brand</Typography>
                    <FormControl component="fieldset">
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={samsung} onChange={handleBrandChange} name="samsung" />}
                                label="Samsung" />
                            <FormControlLabel
                                control={<Checkbox checked={apple} onChange={handleBrandChange} name="apple" />}
                                label="Apple" />
                            <FormControlLabel
                                control={<Checkbox checked={onePlus} onChange={handleBrandChange} name="onePlus" />}
                                label="One Plus" />
                        </FormGroup>
                    </FormControl>
                </div>
                <Grid container justify="center" alignItems="flex-start" spacing={4}>
                    {products.filter(phonesBetweenRange).map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={4} className={classes.item}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </main>
    )
}

export default Products;
