import React, { useState, useEffect } from 'react';
import { Button, IconButton, Collapse, Grid, Typography, Slider, FormControl, FormGroup, FormControlLabel, Checkbox, Select, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({products, onAddToCart}) => 
{
    const [expanded, setExpanded] = useState(true);
    const [price, setPrice] = useState([0, 0]);
    const [borders, setBorders] = useState([0, 0]);
    const [brandsFilter, setBrandsFilter] = useState([]);
    const [yearsFilter, setYearsFilter] = useState([]);
    const [priceRangeCheck, setPriceRangeCheck] = useState(false)
    const [sortType, setSortType] = useState('Highest price to lowest');
    const [brands, setBrands] = useState({ 
        Samsung: false,
        Apple: false, 
        OnePlus: false,
        Xiaomi: false,
        Poco: false 
    });
    const [years, setYears] = useState({ year2020: false, year2021: false });
    
    const { Samsung, Apple, OnePlus, Xiaomi, Poco } = brands;
    const { year2020, year2021 } = years;
    const brandFilterCheck = [Samsung, Apple, OnePlus, Xiaomi, Poco].filter((v) => v).length > 0;
    const yearsFilterCheck = [year2020, year2021].filter((v) => v).length > 0;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
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

    const handleSortChange = (event) => 
    {
        setSortType(event.target.value);
    }

    const applyFilters = (phone) =>
    {
        switch (true)
        {
            // #1 - TTT
            case (priceRangeCheck && brandFilterCheck && yearsFilterCheck):
                return (
                    phone.price.raw >= price[0] && 
                    phone.price.raw <= price[1] && 
                    brandsFilter.some(filter => phone.name.includes(filter)) &&
                    yearsFilter.some(filter => phone.description.includes(filter)));
            // #2 - TTF
            case (priceRangeCheck && brandFilterCheck && !yearsFilterCheck):
                return (
                    phone.price.raw >= price[0] && 
                    phone.price.raw <= price[1] && 
                    brandsFilter.some(filter => phone.name.includes(filter)));
            // #3 - TFT
            case (priceRangeCheck && !brandFilterCheck && yearsFilterCheck):
                return (
                    phone.price.raw >= price[0] && 
                    phone.price.raw <= price[1] && 
                    yearsFilter.some(filter => phone.description.includes(filter)));
            // #4 - TFF
            case (priceRangeCheck && !brandFilterCheck && !yearsFilterCheck):
                return (
                    phone.price.raw >= price[0] && 
                    phone.price.raw <= price[1]);
            // #5 - FTT
            case (!priceRangeCheck && brandFilterCheck && yearsFilterCheck):
                return (
                    brandsFilter.some(filter => phone.name.includes(filter)) &&
                    yearsFilter.some(filter => phone.description.includes(filter)));
            // #6 - FTF
            case (!priceRangeCheck && brandFilterCheck && !yearsFilterCheck):
                return (
                    brandsFilter.some(filter => phone.name.includes(filter)));
            // #7 - FFT
            case (!priceRangeCheck && !brandFilterCheck && yearsFilterCheck):
                return (
                    yearsFilter.some(filter => phone.description.includes(filter)));
            // #8 - FFF (handle inside render)
            default: return;
        }
    }

    const handleBrandChange = (event) => 
    {
        setBrands({ ...brands, [event.target.name]: event.target.checked });
        if (event.target.checked) // add to filters array
            setBrandsFilter(oldFilters => [...oldFilters ,event.target.name]);
        else // delete from filters array
        {
            var copy = [...brandsFilter];
            const index = copy.indexOf(event.target.name);
            if (index > -1)
            {
                copy.splice(index, 1);
                setBrandsFilter(copy);
            }
        }
    }

    const handleYearChange = (event) =>
    {
        setYears({ ...years, [event.target.name]: event.target.checked });
        if (event.target.checked) // add to filters array
            setYearsFilter(oldFilters => [...oldFilters ,event.target.name.replace( /^\D+/g, '')]);
        else // delete from filters array
        {
            var copy = [...yearsFilter];
            const index = copy.indexOf(event.target.name.replace( /^\D+/g, ''));
            if (index > -1)
            {
                copy.splice(index, 1);
                setYearsFilter(copy);
            }
        }
    }

    const handleRangeChange = (event, newPrice) => 
    {
        setPrice(newPrice);
        setPriceRangeCheck(true);
    }

    const sortPhones = (a, b) =>
    {
        switch (sortType)
        {
            case 'Highest price to lowest':
                if (a.price.raw < b.price.raw)
                    return 1;
                else
                {
                    if (b.price.raw < a.price.raw)
                        return -1;
                    return 0;
                }
            case 'Lowest price to highest':
                if (a.price.raw > b.price.raw)
                    return 1;
                else
                {
                    if (b.price.raw > a.price.raw)
                        return -1;
                    return 0;
                }
            default: return;
        }
    }

    const clearFilters = () =>
    {
        setBrands({ ...brands, 'Samsung': false, 'Apple': false, 'OnePlus': false, 'Xiaomi': false, 'Poco': false });
        setYears({ ...years, 'year2020': false, 'year2021': false });
        setPrice([borders[0], borders[1]]);
        setPriceRangeCheck(false);
        setBrandsFilter([]);
        setYearsFilter([]);
    }

    return (
        <main className={classes.main}>
            <div className={classes.toolbar} />
            <div className={classes.root}>
                <div className={classes.filters}>
                    <div className={classes.header}>
                    <Typography className={classes.title} variant="h5">Phones filtering</Typography>
                    <IconButton 
                        className={!expanded? classes.expand : classes.expandOpen}
                        onClick={() => setExpanded(!expanded)} 
                        style={matches? {visibility: 'visible'} : {visibility: 'hidden'}}>
                            <ExpandMoreIcon />
                    </IconButton>
                    </div>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <Typography className={classes.typography} variant="h6">Sory by:</Typography>
                        <FormControl style={{width: '100%'}}>
                            <Select value={sortType} onChange={handleSortChange}>
                                <MenuItem value={'Highest price to lowest'}>Highest price to lowest</MenuItem>
                                <MenuItem value={'Lowest price to highest'}>Lowest price to highest</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography className={classes.typography} variant="h6">Price range</Typography>
                        <div className={classes.priceSlider}>
                            <Slider
                                min={borders[0]}
                                max={borders[1]}
                                value={price}
                                step={1}
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
                                    label="OnePlus" />
                                <FormControlLabel
                                    control={<Checkbox checked={Xiaomi} onChange={handleBrandChange} name="Xiaomi" />}
                                    label="Xiaomi" />
                                <FormControlLabel
                                    control={<Checkbox checked={Poco} onChange={handleBrandChange} name="Poco" />}
                                    label="Poco" />
                            </FormGroup>
                        </FormControl>
                        <Typography className={classes.typography} variant="h6">Release year</Typography>
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
                        <div style={{paddingBottom: 15}} />
                        <Button type="button" variant="contained" color="primary" onClick={() => clearFilters()}>Clear</Button>
                    </Collapse>
                </div>
                {/* <h1>{products.filter(applyFilters).length}</h1> */}
                <Grid container justify="center" alignItems="flex-start" spacing={4}>
                    {brandFilterCheck || yearsFilterCheck || priceRangeCheck ?
                    (
                        (products.filter(applyFilters).length > 0 ?
                            products.sort(sortPhones).filter(applyFilters).map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={6} lg={4} className={classes.item}>
                                <Product product={product} onAddToCart={onAddToCart} />
                            </Grid>
                            ))
                        :
                        <h1>No phones found</h1>
                        )
                    )
                    :
                    products.sort(sortPhones).map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={6} lg={4} className={classes.item}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </main>
    )
}

export default Products;
