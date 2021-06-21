import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
//MenuItem, Menu, 
import { Link, useLocation } from 'react-router-dom';
import ShoppongCart from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';

const Navbar = ({cart}) => 
{
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        {/* <img src={logo} alt="Shop" height="25px" className={classes.image} /> */}
                        Phone Zone
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show card items" color="inherit">
                            <Badge badgeContent={cart.total_items} color="secondary">
                                <ShoppongCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
