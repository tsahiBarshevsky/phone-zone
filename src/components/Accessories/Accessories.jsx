import React, { useState, useEffect } from 'react';
import { Button, IconButton, Collapse, Grid, Typography, Slider, FormControl, FormGroup, FormControlLabel, Checkbox, Select, MenuItem, OutlinedInput, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createMuiTheme, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';
import Accessory from './Accessory/Accessory';

const outerTheme = createMuiTheme({
    typography: { fontFamily: `'Nunito', sans-serif` },
    overrides:
    {
        MuiSlider:
        {
            thumb: { color: '#0c6961' },
            track: { color: '#0c6961' },
            rail:  { color: 'black' }
        }
    }
});

const useOutlinedInputStyles = makeStyles(() => ({
    root:
    {
        "&:hover $notchedOutline": { borderColor: "#0c6961" },
        "&$focused $notchedOutline": { borderColor: "#0c6961" }
    },
    focused: {},
    notchedOutline: {}
}));

const Products = ({accessories, onAddToCart}) =>
{
    const [expanded, setExpanded] = useState(true);
    const [price, setPrice] = useState([0, 0]);
    const [borders, setBorders] = useState([0, 0]);
    const [typesFilter, setTypesFilter] = useState([]);
    const [compatibilityFilter, setCompatibilityFilter] = useState([]);
    const [priceRangeCheck, setPriceRangeCheck] = useState(false)
    const [sortType, setSortType] = useState('Highest price to lowest');
    const [types, setTypes] = useState({
        Case: false,
        Charger: false,
        Cable: false
    });
    const [compatibilities, setCompatibilities] = useState({
        Samsung: false,
        Apple: false,
        OnePlus: false,
        Xiaomi: false,
        Poco: false,
        Realme: false
    });

    const { Case, Charger, Cable } = types;
    const { Samsung, Apple, OnePlus, Xiaomi, Poco, Realme } = compatibilities;
    const typesFiterCheck = [Case, Charger, Cable].filter((v) => v).length > 0;
    const compatibilitiesFilterCheck = [Samsung, Apple, OnePlus, Xiaomi, Poco, Realme].filter((v) => v).length > 0;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    const outlinedInputClasses = useOutlinedInputStyles();

    useEffect(() => {
        function getPricesRange()
        {
            var lowest = Number.POSITIVE_INFINITY;
            var highest = Number.NEGATIVE_INFINITY;
            var tmp;
            for (var i=accessories.length-1; i>=0; i--)
            {
                tmp = accessories[i].price.raw;
                if (tmp < lowest) lowest = tmp;
                if (tmp > highest) highest = tmp;
            }
            setBorders([lowest, highest]);
            setPrice([lowest, highest]);
        }
        getPricesRange();
    }, [accessories]);

    const handleSortChange = (event) =>
    {
        setSortType(event.target.value);
    }

    const applyFilters = (accessory) =>
    {
        switch (true)
        {
            // #1 - TTT
            case (priceRangeCheck && typesFiterCheck && compatibilitiesFilterCheck):
                return (
                    accessory.price.raw >= price[0] &&
                    accessory.price.raw <= price[1] &&
                    typesFilter.some(filter => accessory.name.includes(filter)) &&
                    compatibilityFilter.some(filter => accessory.description.includes(filter)));
            // #2 - TTF
            case (priceRangeCheck && typesFiterCheck && !compatibilitiesFilterCheck):
                return (
                    accessory.price.raw >= price[0] &&
                    accessory.price.raw <= price[1] &&
                    typesFilter.some(filter => accessory.name.includes(filter)));
            // #3 - TFT
            case (priceRangeCheck && !typesFiterCheck && compatibilitiesFilterCheck):
                return (
                    accessory.price.raw >= price[0] &&
                    accessory.price.raw <= price[1] &&
                    compatibilityFilter.some(filter => accessory.description.includes(filter)));
            // #4 - TFF
            case (priceRangeCheck && !typesFiterCheck && !compatibilitiesFilterCheck):
                return (
                    accessory.price.raw >= price[0] &&
                    accessory.price.raw <= price[1]);
            // #5 - FTT
            case (!priceRangeCheck && typesFiterCheck && compatibilitiesFilterCheck):
                return (
                    typesFilter.some(filter => accessory.name.includes(filter)) &&
                    compatibilityFilter.some(filter => accessory.description.includes(filter)));
            // #6 - FTF
            case (!priceRangeCheck && typesFiterCheck && !compatibilitiesFilterCheck):
                return (
                    typesFilter.some(filter => accessory.name.includes(filter)));
            // #7 - FFT
            case (!priceRangeCheck && !typesFiterCheck && compatibilitiesFilterCheck):
                return (
                    compatibilityFilter.some(filter => accessory.description.includes(filter)));
            // #8 - FFF (handle inside render)
            default: return;
        }
    }

    const handleTypeChange = (event) =>
    {
        setTypes({ ...types, [event.target.name]: event.target.checked });
        if (event.target.checked) // add to filters array
            setTypesFilter(oldFilters => [...oldFilters ,event.target.name]);
        else // delete from filters array
        {
            var copy = [...typesFilter];
            const index = copy.indexOf(event.target.name);
            if (index > -1)
            {
                copy.splice(index, 1);
                setTypesFilter(copy);
            }
        }
    }

    const handleCompatibilityChange = (event) =>
    {
        setCompatibilities({ ...compatibilities, [event.target.name]: event.target.checked });
        if (event.target.checked) // add to filters array
            setCompatibilityFilter(oldFilters => [...oldFilters ,event.target.name]);
        else // delete from filters array
        {
            var copy = [...compatibilityFilter];
            const index = copy.indexOf(event.target.name);
            if (index > -1)
            {
                copy.splice(index, 1);
                setCompatibilityFilter(copy);
            }
        }
    }

    const handleRangeChange = (event, newPrice) =>
    {
        setPrice(newPrice);
        setPriceRangeCheck(true);
    }

    const sortAccessories = (a, b) =>
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
        setTypes({ ...types, 'Case': false, 'Charger': false, 'Cable': false });
        setCompatibilities({ ...compatibilities, 'Samsung': false, 'Apple': false, 'OnePlus': false, 'Xiaomi': false, 'Poco': false, 'Realme': false });
        setPrice([borders[0], borders[1]]);
        setPriceRangeCheck(false);
        setTypesFilter([]);
        setCompatibilityFilter([]);
        setSortType('Highest price to lowest');
    }

    return (
        <main className={classes.main}>
            <div className={classes.toolbar} />
            <div className={classes.pageHeader}>
                <Typography variant="h3" className={classes.headerTitle}>Our accessories</Typography>
            </div>
            <div className={classes.root}>
                <div className={classes.filters}>
                    <div className={classes.header}>
                        <Typography className={classes.title} variant="h5">Accessories filtering</Typography>
                        <IconButton
                            className={!expanded? classes.expand : classes.expandOpen}
                            onClick={() => setExpanded(!expanded)}
                            style={matches? {visibility: 'visible'} : {visibility: 'hidden'}}>
                                <ExpandMoreIcon />
                        </IconButton>
                    </div>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <Typography className={classes.typography} variant="h6">Sort by:</Typography>
                        <MuiThemeProvider theme={outerTheme}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <Select
                                    value={sortType}
                                    onChange={handleSortChange}
                                    input={
                                        <OutlinedInput classes={outlinedInputClasses} />
                                    }>
                                    <MenuItem value={'Highest price to lowest'}>Highest price to lowest</MenuItem>
                                    <MenuItem value={'Lowest price to highest'}>Lowest price to highest</MenuItem>
                                </Select>
                            </FormControl>
                        </MuiThemeProvider>
                        <Typography className={classes.typography} variant="h6">Price range</Typography>
                        <MuiThemeProvider theme={outerTheme}>
                            <div className={classes.priceSlider}>
                                <Slider
                                    min={borders[0]}
                                    max={borders[1]}
                                    value={price}
                                    step={1}
                                    onChange={handleRangeChange} />
                            </div>
                        </MuiThemeProvider>
                        <div className={classes.range}>
                            <Typography className={classes.caption} variant="caption">${price[0]}</Typography>
                            <Typography className={classes.caption} variant="caption">${price[1]}</Typography>
                        </div>
                        <div style={{marginTop: 20}} />
                        <Typography className={classes.typography} variant="h6">Type</Typography>
                        <MuiThemeProvider theme={outerTheme}>
                            <FormControl component="fieldset">
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox style={{color:'#0c6961'}} checked={Case} onChange={handleTypeChange} name="Case" />}
                                        label="Case" />
                                    <FormControlLabel
                                        control={<Checkbox style={{color:'#0c6961'}} checked={Charger} onChange={handleTypeChange} name="Charger" />}
                                        label="Charger" />
                                    <FormControlLabel
                                        control={<Checkbox style={{color:'#0c6961'}} checked={Cable} onChange={handleTypeChange} name="Cable" />}
                                        label="Cable" />
                                </FormGroup>
                            </FormControl>
                        </MuiThemeProvider>
                        <div style={{marginTop: 20}} />
                        <Typography className={classes.typography} variant="h6">Compatibility</Typography>
                        <MuiThemeProvider theme={outerTheme}>
                            <FormControl component="fieldset">
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox style={{color:'#0c6961'}} checked={Samsung} onChange={handleCompatibilityChange} name="Samsung" />}
                                        label="Samsung" />
                                    <FormControlLabel
                                        control={<Checkbox style={{color:'#0c6961'}} checked={Apple} onChange={handleCompatibilityChange} name="Apple" />}
                                        label="Apple" />
                                    <FormControlLabel
                                        control={<Checkbox style={{color:'#0c6961'}} checked={OnePlus} onChange={handleCompatibilityChange} name="OnePlus" />}
                                        label="OnePlus" />
                                    <FormControlLabel
                                        control={<Checkbox style={{color:'#0c6961'}} checked={Xiaomi} onChange={handleCompatibilityChange} name="Xiaomi" />}
                                        label="Xiaomi" />
                                    <FormControlLabel
                                        control={<Checkbox style={{color:'#0c6961'}} checked={Poco} onChange={handleCompatibilityChange} name="Poco" />}
                                        label="Poco" />
                                    <FormControlLabel
                                        control={<Checkbox style={{color:'#0c6961'}} checked={Realme} onChange={handleCompatibilityChange} name="Realme" />}
                                        label="Realme" />
                                </FormGroup>
                            </FormControl>
                        </MuiThemeProvider>
                        <div style={{marginBottom: 20}} />
                        <Button className={classes.button} onClick={() => clearFilters()}>Clear filters</Button>
                    </Collapse>
                </div>
                <Grid container justify="center" alignItems="flex-start" spacing={4}>
                    {typesFiterCheck || compatibilitiesFilterCheck || priceRangeCheck ?
                    (
                        (accessories.filter(applyFilters).length > 0 ?
                        accessories.sort(sortAccessories).filter(applyFilters).map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={6} lg={4} className={classes.item}>
                                <Accessory product={product} onAddToCart={onAddToCart} />
                            </Grid>
                            ))
                        :
                        <Typography className={classes.noResult} variant="h4">No accessory found based on your search</Typography>
                        )
                    )
                    :
                    accessories.sort(sortAccessories).map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={6} lg={4} className={classes.item}>
                            <Accessory product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </main>
    )
}

export default Products;
