import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography ,Paper, Grid, Button } from '@material-ui/core';
import { customersTestimonial } from './Items';
import { Link } from 'react-router-dom';
import './styles.sass';
import useStyles from './useStyles';
import About from '../../assets/nathan-dumlao-kLmt1mpGJVg-unsplash.jpg';

const Homepage = ({products, numberOfOrders}) => 
{
    const classes = useStyles();

    const TestimonialItem = ({customer}) => (
        <Paper className="testimonial">
            <Typography className={classes.opinion} align="center" variant="h5">{customer.opinion}</Typography>
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
            <div className="about-us">
                <Typography className={classes.sectionTitle} variant="h3" align="center">About us</Typography>
                <div className="wrapper">
                    <img src={About} alt="Phone Zone" className="about-image" />
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere pulvinar nisl eu tristique. Mauris consequat nulla non nibh convallis rutrum et non risus. Cras tortor dolor, convallis vehicula lectus ut, vehicula molestie mi. Duis urna erat, lobortis ut massa quis, pellentesque ultrices enim. In bibendum hendrerit aliquam. Proin placerat eget velit eget ornare. Vestibulum at imperdiet est. Phasellus est odio, fringilla ac nulla ultrices, dignissim molestie arcu. Vestibulum non ultrices metus. Pellentesque vel dui diam. Suspendisse justo lacus, rhoncus sed iaculis eu, fermentum eget massa.</p>
                </div>
            </div>
            <div className="statistics">
                <Typography className={classes.sectionTitle} variant="h3" align="center">Statistics</Typography>
                <Grid container justify="center" alignContent="center" className={classes.grid}>
                    <Grid item xs={6} sm={3} md={3} lg={3} className={classes.statisticItem}>
                        <Typography variant="h4" className={classes.statisticNumber}>{numberOfOrders}</Typography>
                        <Typography variant="h6" className={classes.statisticCaption}>Orders</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3} className={classes.statisticItem}>
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
            <div className="testimonial-container">
                <Typography className={classes.sectionTitle} variant="h3" align="center">Customers testimonial</Typography>
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
