import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import FormInput from './CustomTextField';

const useStyles = makeStyles(() => (
{
    typography: { fontFamily: `'Nunito', sans-serif` },
    next:
    {
        color: 'white',
        backgroundColor: '#0c6961',
        textTransform: 'capitalize',
        fontSize: 15,
        '&:hover':
        {
            backgroundColor: '#0c6961E6'
        }
    },
    back:
    {
        textTransform: 'capitalize',
        fontSize: 15,
    }
}));

const outerTheme = createMuiTheme({
    typography: { fontFamily: `'Nunito', sans-serif` }    
});

const AddressForm = ({checkoutToken, next}) => 
{
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
    const classes = useStyles();

    const fetchShippingCountries = async (checkoutTokenID) =>
    {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenID);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivisions = async (countryCode) =>
    {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => 
    {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
        setShippingOptions(options);
        setShippingOption(options[0].id);
    };

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, [checkoutToken.id]);

    useEffect(() => {
        if (shippingCountry)
            fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) 
            fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision, checkoutToken.id, shippingCountry]);

    return (
        <>
            <Typography variant="h5" gutterBottom className={classes.typography}>Shipping details</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({...data, shippingCountry, shippingSubdivision, shippingOption}))}>
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First Name' />
                        <FormInput name='lastName' label='Last Name' />
                        <FormInput name='address' label='Address' />
                        <FormInput name='email' label='Email' />
                        <FormInput name='city' label='City' />
                        <FormInput name='zip' label='ZIP Code ' />
                        <Grid item xs={12} sm={6}>
                            <MuiThemeProvider theme={outerTheme}>
                                <InputLabel>Shipping Country</InputLabel>
                                <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                    {countries.map((country) =>
                                        <MenuItem key={country.id} value={country.id}>
                                            {country.label}
                                        </MenuItem>
                                    )}
                                </Select>
                            </MuiThemeProvider>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MuiThemeProvider theme={outerTheme}>
                                <InputLabel>Shipping Subdivision</InputLabel>
                                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                    {subdivisions.map((subdivision) =>
                                        <MenuItem key={subdivision.id} value={subdivision.id}>
                                            {subdivision.label}
                                        </MenuItem>
                                    )}
                                </Select>
                            </MuiThemeProvider>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MuiThemeProvider theme={outerTheme}>
                                <InputLabel>Shipping Options</InputLabel>
                                <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                    {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                    ))}
                                </Select>
                            </MuiThemeProvider>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 15}}>
                        <Button className={classes.back} component={Link} to='/cart' variant="outlined">Back to cart</Button>
                        <Button className={classes.next} type="submit" variant="contained">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm;
