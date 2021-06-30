import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography ,Paper, Grid, Button } from '@material-ui/core';
import { customersTestimonial } from './Items';
import { Link } from 'react-router-dom';
import './styles.sass';
import useStyles from './useStyles';

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
                <Typography variant='h3' className={classes.title}>don't stay far behind everyone with an old smartphone, buy a </Typography>
                <div className="subtitle">
                    <Typography variant="h6" className={classes.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum maximus euismod. Proin semper erat a lorem egestas iaculis. Curabitur accumsan ex augue, et imperdiet ligula sollicitudin ac.</Typography>
                </div>
                <Button className="button" component={Link} to='/phones'>Browse phones</Button>
            </div>
            {/* <div className="about-us">
                <Typography className={classes.sectionTitle} variant="h3" align="center">About us</Typography>
                <div className="wrapper">
                <img src={About} alt="Phone Zone" className="about-image" />
                <Typography variant="h6" className={classes.typography}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere pulvinar nisl eu tristique. Mauris consequat nulla non nibh convallis rutrum et non risus. Cras tortor dolor, convallis vehicula lectus ut, vehicula molestie mi. Duis urna erat, lobortis ut massa quis, pellentesque ultrices enim. In bibendum hendrerit aliquam. Proin placerat eget velit eget ornare. Vestibulum at imperdiet est. Phasellus est odio, fringilla ac nulla ultrices, dignissim molestie arcu. Vestibulum non ultrices metus. Pellentesque vel dui diam. Suspendisse justo lacus, rhoncus sed iaculis eu, fermentum eget massa.</Typography>
                </div>
            </div> */}
            <div className="statistics">
                <Typography className={classes.sectionTitle} variant="h3" align="center">Statistics</Typography>
                <Grid container justify="center" alignContent="center" className={classes.grid}>
                    <Grid item xs={6} sm={3} md={3} lg={3} className={classes.item}>
                        <Typography variant="h4" className={classes.statisticNumber}>{numberOfOrders}</Typography>
                        <Typography variant="h6" className={classes.statisticCaption}>Orders</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3} className={classes.item}>
                        <Typography variant="h4" className={classes.statisticNumber}>{products.length}</Typography>
                        <Typography variant="h6" className={classes.statisticCaption}>Phones</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3} className={classes.item}>
                        <Typography variant="h4" className={classes.statisticNumber}>5</Typography>
                        <Typography variant="h6" className={classes.statisticCaption}>Brands</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3} className={classes.item}>
                        <Typography variant="h4" className={classes.statisticNumber}>5</Typography>
                        <Typography variant="h6" className={classes.statisticCaption}>Brands</Typography>
                    </Grid>
                </Grid>
            </div>
            {/* <div className="devices">
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
            </div> */}
            {/* <div className="testimonial-container">
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
            </div> */}
        </div>
    )
}

export default Homepage;
