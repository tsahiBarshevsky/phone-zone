import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography ,Paper, Grid, Button, makeStyles } from '@material-ui/core';
import { customersTestimonial } from './Items';
import { Link } from 'react-router-dom';
import './styles.sass';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    typography: { fontFamily: `'Nunito', sans-serif` },
    opinion: 
    { 
        fontFamily: `'Nunito', sans-serif`,
        lineHeight: 1.2,
        width: '70%',
        marginBottom: 45,
        [theme.breakpoints.down('xs')]:
        {
            width: '100%',
            fontSize: 17
        }
    },
    name:
    {
        fontFamily: `'Nunito', sans-serif`,
        fontWeight: 600,
        marginBottom: -5
    },
    item:
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:
    {
        color: '#0c6961',
        backgroundColor: 'transparent',
        border: '2px solid #0c6961',
        textTransform: 'capitalize',
        borderRadius: 25,
        fontSize: 20,
        width: 160,
        height: 40,
        transition: '0.3s ease-in',
        marginTop: 20,
        '&:hover':
        {
            color: 'white',
            backgroundColor: '#0c6961',
            transition: '0.3s ease-out'
        }
    }
}));

const Homepage = ({products, numberOfOrders}) => 
{
    const classes = useStyles();

    const renderProducts = () =>
    {
        var randomIndexs = [];
        while(randomIndexs.length < 3)
        {
            var r = Math.floor(Math.random() * products.length);
            if (randomIndexs.indexOf(r) === -1) 
                randomIndexs.push(r);
        }
        return (
            <div>
                <Grid container justify="center" spacing={3} style={{paddingTop: 20}}>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.item}>
                        <img src={products[randomIndexs[0]].media.source} alt={products[randomIndexs[0]].name} className="product-image" />
                        <h1>{products[randomIndexs[0]].name}</h1>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.item}>
                        <img src={products[randomIndexs[1]].media.source} alt={products[randomIndexs[0]].name} className="product-image" />
                        <h1>{products[randomIndexs[1]].name}</h1>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.item}>
                        <img src={products[randomIndexs[2]].media.source} alt={products[randomIndexs[0]].name} className="product-image" />
                        <h1>{products[randomIndexs[2]].name}</h1>
                    </Grid>
                </Grid>
            </div>
        )
    }

    const TestimonialItem = ({customer}) => (
        <Paper className="testimonial">
            <Typography 
                className={classes.opinion} 
                align="center" 
                variant="h5">
                    {customer.opinion}
            </Typography>
            <div className="info">
                <img src={customer.image} alt={customer.name} className="image" />
                <div className="name-and-device">
                    <Typography className={classes.name} variant="subtitle1">{customer.name}</Typography>
                    <Typography className={classes.typography} variant="subtitle2">{customer.device}</Typography>
                </div>
            </div>
        </Paper>
    );

    return (
        <div className="homepage-container">
            <div className={classes.toolbar} />
            <div className="hero">
                
            </div>
            <div className="devices">
                <Typography>Number of orders: {numberOfOrders}</Typography>
                <Typography>Number of phones: {products.length}</Typography>
                <Typography 
                    style={{alignSelf: 'center'}} 
                    className={classes.typography} 
                    variant="h4">
                        Some of our devices
                </Typography>
                {products.length > 0 && renderProducts()}
                <Button component={Link} to='/phones' className={classes.button}>
                    <span>See more</span>
                </Button>
            </div>
            <div className="testimonial-container">
                <Typography 
                    style={{alignSelf: 'center'}} 
                    className={classes.typography} 
                    variant="h4">
                        Customers testimonial
                </Typography>
                <Carousel indicators={false} timeout={700} animation="slide">
                {
                    customersTestimonial.map((customer, i) => <TestimonialItem key={i} customer={customer} />)
                }
                </Carousel>
            </div>
        </div>
    )
}

export default Homepage;
