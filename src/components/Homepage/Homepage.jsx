import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography ,Paper, makeStyles } from '@material-ui/core';
import { heroItems, customersTestimonial } from './Items';
import './styles.sass';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    typography: { fontFamily: `'Baloo Tammudu 2', sans-serif` },
    opinion: 
    { 
        fontFamily: `'Baloo Tammudu 2', sans-serif`,
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
        fontFamily: `'Baloo Tammudu 2', sans-serif`,
        fontWeight: 600,
        marginBottom: -5
    }
}));

const Homepage = () => 
{
    const classes = useStyles();

    const HeroItem = ({item}) => (
        <Paper className="paper">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </Paper>
    );

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
            <Carousel indicators={false} timeout={1200}>
            {
                heroItems.map((item, i) => <HeroItem key={i} item={item} />)
            }
            </Carousel>
            <div style={{paddingBlock: 100}} />
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
