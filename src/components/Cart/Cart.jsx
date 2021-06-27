import React from 'react';
import { Container, Typography, Button, Grid, Divider, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import './styles.sass';

const useStyles = makeStyles((theme) => (
{
    toolbar: theme.mixins.toolbar,
    typography: { fontFamily: `'Nunito', sans-serif` },
    headerTitle:
    {
        fontFamily: `'Nunito', sans-serif`,
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: 1,
        letterSpacing: 2
    },
    divider:
    {
        width: '100%',
        marginBlock: 10
    }
}));

const Cart = ({cart, updateCartQuantity, removeFromCart, emptyCart}) => 
{
    const classes = useStyles();
    console.log(cart);

    const EmptyCart = () =>
    (
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some.</Typography>
    );

    const FilledCart = () =>
    (
        <>
                {cart.line_items.map((item) => (
                    <CartItem item={item} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />
                ))}
        </>
    );

    if (!cart.line_items)
        return 'Loading...'

    return (
        <main className="main">
            <div className={classes.toolbar} />
            <div className="header">
                <Typography variant="h3" className={classes.headerTitle}>Shopping bag</Typography>
            </div>
            <div className="cart-container">
                <div className="cart">
                    <div className="products">
                        <Typography className={classes.typography} variant="h6" color="textSecondary">
                            {cart.line_items.length === 1 ? 'Your selection' : 'Your selections'}
                        </Typography>
                        <Divider className={classes.divider} />
                        { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
                    </div>
                    <div className="order-summary">
                        <Typography className={classes.typography} variant="subtitle1" color="textSecondary">Order summary</Typography>
                        <Divider className={classes.divider} />
                        <Typography className={classes.typography}>Itmes: {cart.total_items}</Typography>
                        <Typography className={classes.typography}>Phones: {cart.total_unique_items}</Typography>
                        <Typography className={classes.typography}>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={emptyCart}>
                            Empty Cart
                        </Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )


    // return (
    //     <Container className={classes.main}>
    //         <div className={classes.toolbar} />
    //         <Typography className={classes.title} variant="h4" gutterBottom>Your shopping cart</Typography>
    //         { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
    //     </Container>
    // )
}

export default Cart;
