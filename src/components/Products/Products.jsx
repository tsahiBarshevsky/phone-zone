import React, { useState, useEffect } from 'react';
import { Grid, Typography, Slider, FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({products, onAddToCart}) => 
{
    const [price, setPrice] = useState([0, 0]);
    const [borders, setBorders] = useState([0, 0]);
    const [filters, setFilters] = useState([]);
    const [brands, setBrands] = useState({ Samsung: false, Apple: false, OnePlus: false });
    const [years, setYears] = useState({ year2020: false, year2021: false });
    
    const { Samsung, Apple, OnePlus } = brands;
    const { year2020, year2021 } = years;
    const filterCheck = [Samsung, Apple, OnePlus].filter((v) => v).length > 0;
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

    const applyFilters = (phone) =>
    {
        return (
            phone.price.raw >= price[0] && 
            phone.price.raw <= price[1] && 
            filters.some(filter => phone.name.includes(filter)));
    }

    const handleBrandChange = (event) => 
    {
        setBrands({ ...brands, [event.target.name]: event.target.checked });
        if (event.target.checked) // add to filters array
            setFilters(oldFilters => [...oldFilters ,event.target.name]);
        else // delete from filters array
        {
            var copy = [...filters];
            const index = copy.indexOf(event.target.name);
            if (index > -1)
            {
                copy.splice(index, 1);
                setFilters(copy);
            }
        }
    }

    const handleYearChange = (event) =>
    {
        setYears({ ...years, [event.target.name]: event.target.checked });
    }

    const handleRangeChange = (event, newPrice) => 
    {
        setPrice(newPrice);
    }

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
                                control={<Checkbox checked={Samsung} onChange={handleBrandChange} name="Samsung" />}
                                label="Samsung" />
                            <FormControlLabel
                                control={<Checkbox checked={Apple} onChange={handleBrandChange} name="Apple" />}
                                label="Apple" />
                            <FormControlLabel
                                control={<Checkbox checked={OnePlus} onChange={handleBrandChange} name="OnePlus" />}
                                label="One Plus" />
                        </FormGroup>
                    </FormControl>
                    <Typography className={classes.typography} variant="h6">Years</Typography>
                    <FormControl component="fieldset">
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={year2020} onChange={handleYearChange} name="year2020" />}
                                label="2020" />
                            <FormControlLabel
                                control={<Checkbox checked={year2021} onChange={handleYearChange} name="year2021" />}
                                label="2021" />
                        </FormGroup>
                    </FormControl>
                </div>
                <Grid container justify="center" alignItems="flex-start" spacing={4}>
                    {filterCheck ? 
                    products.filter(applyFilters).map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={4} className={classes.item}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))
                    :
                    products.map((product) => (
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
