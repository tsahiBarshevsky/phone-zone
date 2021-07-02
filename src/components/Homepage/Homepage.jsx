import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography ,Paper, Grid, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Emoji from "react-emoji-render";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { customersTestimonial } from './Testimonials';
import { subtitle, about } from './Texts';
import useStyles from './useStyles';
import About from '../../assets/nathan-dumlao-kLmt1mpGJVg-unsplash.jpg';
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
                {/* <Typography className={classes.sectionTitle} variant="h3" align="center">About us</Typography>
                <div className="wrapper">
                    <img src={About} alt="Phone Zone" className="about-image" />
                    <div className="paragraph">
                        {about.split('\n').map((paragraph, index) => (
                            <p key={index} className="about-text">{paragraph}</p>
                        ))}
                    </div>
                </div> */}
                <div className="categories">
                    <div className="category-box">
                        <img src="https://images.pexels.com/photos/3973973/pexels-photo-3973973.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="fafa" />
                        <div className="category-button">
                            <Typography style={{color: 'white'}}>Smartphones</Typography>
                            <Button variant="contained" color="primary">See all</Button>
                        </div>
                    </div>
                    <div className="category-box">
                        <img src="https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="fafa" />
                        <div className="category-button">
                            <Typography style={{color: 'white'}}>Accessories</Typography>
                            <Button variant="contained" color="primary">See all</Button>
                        </div>
                    </div>
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
