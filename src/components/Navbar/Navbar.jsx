import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Button, Divider, SwipeableDrawer } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import ShoppongCart from '@material-ui/icons/ShoppingCart';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { animateScroll } from 'react-scroll';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import logo from '../../assets/logo.png';

const Navbar = ({cart, updateCartQuantity, removeFromCart}) => 
{
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles();
    const location = useLocation();

    const handleOpen = () => 
    {
        setOpenDrawer(true);
    }
    
    const handleClose = () =>
    {
        setOpenDrawer(false);
    }

    const toggleHome = () => 
    {
        if (window.location.pathname === '/')
            animateScroll.scrollToTop();
        else
            window.location.replace('/');
    }

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <img onClick={toggleHome} src={logo} alt="Phone Zone" height="50px" className={classes.image} />
                    <div className={classes.grow} />
                    {location.pathname !== '/cart' && location.pathname !== '/checkout' && (
                    <div>
                        <IconButton onClick={handleOpen} aria-label="Show card items" color="inherit">
                            <Badge badgeContent={cart.total_items} color="secondary">
                                <ShoppongCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
            <SwipeableDrawer 
                anchor="right" 
                classes={{paper: classes.paper}} 
                transitionDuration={600} 
                open={openDrawer} 
                onOpen={handleOpen}
                onClose={handleClose}>
                    <div className={classes.header}>
                        <Typography className={classes.typography} variant="h5">Shopping bag ({cart.total_items})</Typography>
                        <IconButton onClick={handleClose}>
                            <CloseRoundedIcon />
                        </IconButton>
                    </div>
                    <Divider className={classes.divider} />
                    {Object.keys(cart).length > 0 && cart.line_items.length > 0 ?
                    <div className={classes.items}>
                        {Object.keys(cart).length > 0 &&
                        cart.line_items.map((item) => (
                            <CartItem 
                                key={item.id}
                                product={item} 
                                updateCartQuantity={updateCartQuantity}
                                removeFromCart={removeFromCart} />
                        ))}  
                    </div>
                    :
                    <div className={classes.emptyCart}>
                        <Typography className={classes.typography} variant="h6">Your bag is empty</Typography>
                    </div>}
                    <div className={classes.checkout}>
                        <Divider className={classes.divider} />
                        <div className={classes.subtotal}>
                            <Typography className={classes.typography} variant="h6">Subtotal: </Typography>
                            <Typography className={classes.cardSubtotal} variant="subtitle1" >
                                {Object.keys(cart).length > 0 && cart.line_items.length > 0 ? cart.subtotal.formatted_with_symbol : '$0.00'}
                            </Typography>
                        </div>
                        {Object.keys(cart).length > 0 && cart.line_items.length > 0 ?
                        <Button 
                            variant="outlined" 
                            component={Link} 
                            to='/cart' 
                            onClick={handleClose}
                            className={classes.button}>Checkout</Button>
                        :
                        <Button 
                            variant="outlined" 
                            component={Link} 
                            to='/phones' 
                            onClick={handleClose}
                            className={classes.button}>Start shopping!</Button>}
                    </div>
            </SwipeableDrawer>
        </>
    )
}

export default Navbar;
