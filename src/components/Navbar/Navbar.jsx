import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Menu, Button, Divider, withStyles } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import ShoppongCart from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import logo from '../../assets/logo.png';

const StyledMenu = withStyles(
{
    paper: 
    {
        width: 400,
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

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Link to='/' className={classes.link}>
                        <img src={logo} alt="Phone Zone" height="50px" className={classes.image} />
                    </Link>
                    <div className={classes.grow} />
                    {location.pathname !== '/cart' && (
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
                    {Object.keys(cart).length > 0 && cart.line_items.length > 0 ?
                    <div>
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
                        <Divider className={classes.divider} />
                        {Object.keys(cart).length > 0 &&
                        <div className={classes.subtotal}>
                            <Typography className={classes.typography} variant="h6">Subtotal: </Typography>
                            <Typography className={classes.cardSubtotal} variant="subtitle1" >
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
                    :
                    <div className={classes.emptyCart}>
                        <Typography className={classes.typography} variant="h6">Your cart is empty</Typography>
                    </div>}
            </StyledMenu>
        </>
    )
}

export default Navbar;
