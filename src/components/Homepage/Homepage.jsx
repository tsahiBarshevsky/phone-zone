import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography ,Paper, Grid, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Emoji from "react-emoji-render";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './styles.sass';
import { customersTestimonial } from './Testimonials';
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
            <footer>
                <Typography variant="body1" paragraph gutterBottom className={classes.footerContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero arcu, blandit eu justo non, ullamcorper suscipit velit. Praesent urna mi, fringilla in varius nec, tempor et lectus. Quisque iaculis faucibus nisl sit amet lobortis. Phasellus sed urna sollicitudin, vulputate lectus tristique, vestibulum dui. Donec blandit auctor massa ac feugiat. Etiam sit amet pulvinar lacus. Duis vel venenatis ex, et vulputate orci. Duis a ultrices lectus. Donec non ornare lacus, non pulvinar sapien. Cras finibus cursus turpis, eu faucibus augue auctor sed. Pellentesque vel rhoncus arcu. Duis at purus felis. In lobortis molestie tristique. Ut luctus dignissim mi, et facilisis enim pulvinar id. Aenean sit amet ipsum ut neque faucibus cursus. Nam vitae magna pellentesque, facilisis lectus vitae, luctus erat.
                </Typography>
                <Divider className={classes.divider} />
                <div className="wrapper">
                    <div className="content">
                        <Typography variant="subtitle1" className={classes.footerContent}>
                            Copyright &copy; {new Date().getFullYear() === 2021 ? 2021 : `2021 - ${new Date().getFullYear()}`} All Rights Reserved
                        </Typography>
                        <Typography variant="subtitle1" align="center" className={classes.footerContent}>
                            Coded with <Emoji text=":heart:" /> by Tsahi Barshavsky
                        </Typography>
                    </div>
                    <div className="contact">
                        <a href="https://www.linkedin.com/in/tsahi-barshavsky-frontend-developer/" target="_blank" rel="noreferrer" className="linkedin"><FaLinkedinIn /></a>
                        <a href="https://github.com/tsahiBarshevsky" target="_blank" rel="noreferrer" className="github"><FaGithub /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Homepage;
