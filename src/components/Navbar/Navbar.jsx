import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Menu, Button, Divider, withStyles } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import ShoppongCart from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const StyledMenu = withStyles(
{
    paper: 
    {
        marginTop: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        border: '1px solid #3a3b3c'
    },
})((props) => 
(
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

// const StyledMenuItem = withStyles((theme) =>
// ({
//     root: 
//     {
//         color: 'transparent',
//         '&:hover':
//         {
//             backgroundColor: '#ffffff1A'
//         },
//         '& .MuiListItemIcon-root, & .MuiListItemText-primary': 
//         {
//             color: theme.palette.common.white,
//             fontFamily: `"Nunito", sans-serif`
//         }
//     },
// }))(MenuItem);

const Navbar = ({cart, updateCartQuantity, removeFromCart}) => 
{
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const location = useLocation();

    const handleClick = (event) => 
    {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () =>
    {
        setAnchorEl(null);
    }

    console.log('====================================');
    console.log(cart);
    console.log('====================================');

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
                        <IconButton onClick={handleClick} aria-label="Show card items" color="inherit">
                            <Badge badgeContent={cart.total_items} color="secondary">
                                <ShoppongCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    <div>
                        {Object.keys(cart).length > 0 &&
                        cart.line_items.map((item) => (
                            <CartItem 
                                product={item} 
                                updateCartQuantity={updateCartQuantity}
                                removeFromCart={removeFromCart} />
                        ))}
                        <Divider className={classes.divider} />
                        {Object.keys(cart).length > 0 &&
                        <div className={classes.subtotal}>
                            <Typography variant="h6">Subtotal: </Typography>
                            <Typography variant="subtitle1" className={classes.cardSubtotal}>
                                {cart.subtotal.formatted_with_symbol}
                            </Typography>
                        </div>}
                        <Button 
                            variant="outlined" 
                            component={Link} 
                            to='/cart' 
                            onClick={handleClose}
                            className={classes.goToCart}>Go to cart</Button>
                    </div>
            </StyledMenu>
        </>
    )
}

export default Navbar;
