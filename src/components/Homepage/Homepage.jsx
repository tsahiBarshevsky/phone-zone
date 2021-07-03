import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography ,Paper, Grid, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Emoji from "react-emoji-render";
import { FaLinkedinIn, FaGithub, FaShippingFast, FaHandshake } from 'react-icons/fa';
import { GoCreditCard } from 'react-icons/go';
import { subtitle, about, service1, service2, service3, testimonials, footerAbout } from './Texts';
import useStyles from './useStyles';
// import About from '../../assets/nathan-dumlao-kLmt1mpGJVg-unsplash.jpg';
import './styles.sass';

const Homepage = ({phones, accessories, numberOfOrders}) => 
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
                    <Typography variant="h6" className={classes.subtitle}>{subtitle}</Typography>
                </div>
                <Button className="button" component={Link} to='/phones'>Browse phones</Button>
            </div>
            <div className="about-us">
                <div className="wrapper">
                    <img className="about-image" src="https://images.unsplash.com/photo-1617701586210-a4f7c114bdc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="" />
                    <div className="about-text">
                        <Typography className={classes.aboutTitle} variant="h3" gutterBottom>About us</Typography>
                        {about.split('\n').map((paragraph, index) => (
                            <Typography className={classes.typography} variant="h6" key={index} paragraph>{paragraph}</Typography>
                        ))}
                    </div>
                </div>
                <div className="categories">
                    <div className="category-box">
                        <img src="https://images.pexels.com/photos/3973973/pexels-photo-3973973.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="fafa" />
                        <div className="category-button">
                            <Typography className={classes.categoryText} gutterBottom>Smartphones</Typography>
                            <Button component={Link} to='/phones' className={classes.categoryButton} variant="contained">See all</Button>
                        </div>
                    </div>
                    <div className="category-box">
                        <img src="https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="fafa" />
                        <div className="category-button">
                            <Typography className={classes.categoryText} gutterBottom>Accessories</Typography>
                            <Button component={Link} to='/accessories' className={classes.categoryButton} variant="contained">See all</Button>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <Grid container spacing={3} justify="center" alignItems="flex-start">
                        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.service}>
                            <div className="icon-wrapper">
                                <FaShippingFast className="icon" />
                            </div>
                            <Typography className={classes.serviceTitle} variant="h5">Fast & cheap shipping</Typography>
                            <Typography className={classes.serviceText} variant="subtitle1">{service1}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.service}>
                            <div className="icon-wrapper">
                                <GoCreditCard className="icon" />
                            </div>
                            <Typography className={classes.serviceTitle} variant="h5">Secure payment</Typography>
                            <Typography className={classes.serviceText} variant="subtitle1">{service2}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} className={classes.service}>
                            <div className="icon-wrapper">
                                <FaHandshake className="icon" />
                            </div>
                            <Typography className={classes.serviceTitle} variant="h5">Full warranty</Typography>
                            <Typography className={classes.serviceText} variant="subtitle1">{service3}</Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="statistics">
                <Typography className={classes.statisticsTitle} variant="h3" align="center">Statistics</Typography>
                <Grid container justify="center" alignContent="center" className={classes.grid}>
                    <Grid item xs={6} sm={3} md={3} lg={3} className={classes.statisticItem}>
                        <Typography variant="h4" className={classes.statisticNumber}>{numberOfOrders}</Typography>
                        <Typography variant="h6" className={classes.statisticCaption}>Orders</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3} className={classes.statisticItem}>
                        <Typography variant="h4" className={classes.statisticNumber}>{phones.length}</Typography>
                        <Typography variant="h6" className={classes.statisticCaption}>Phones</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3} className={classes.item}>
                        <Typography variant="h4" className={classes.statisticNumber}>8</Typography>
                        <Typography variant="h6" className={classes.statisticCaption}>Brands</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3} className={classes.item}>
                        <Typography variant="h4" className={classes.statisticNumber}>{accessories.length}</Typography>
                        <Typography variant="h6" className={classes.statisticCaption}>Accessories</Typography>
                    </Grid>
                </Grid>
            </div>
            <div className="testimonial-container">
                <Typography className={classes.sectionTitle} variant="h3" align="center">Customers testimonial</Typography>
                <Carousel indicators={false} timeout={700} animation="slide">
                {
                   testimonials.map((customer, i) => <TestimonialItem key={i} customer={customer} />)
                }
                </Carousel>
            </div>
            <footer>
                {footerAbout.split('\n').map((paragraph, index) => (
                    <Typography key={index} variant="body1" paragraph className={classes.footerContent}>
                        {paragraph}
                    </Typography>
                ))}
                <Divider className={classes.divider} />
                <div className="wrapper">
                    <div className="content">
                        <Typography variant="subtitle1" className={classes.copyright}>
                            Copyright &copy; {new Date().getFullYear() === 2021 ? 2021 : `2021 - ${new Date().getFullYear()}`} All Rights Reserved
                        </Typography>
                        <Typography variant="subtitle1" align="center" className={classes.copyright}>
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
