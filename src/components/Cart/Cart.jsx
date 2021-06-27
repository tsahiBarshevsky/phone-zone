import React from 'react';
import { Typography, Button, Divider, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import './styles.sass';

const useStyles = makeStyles((theme) => (
{
    toolbar: theme.mixins.toolbar,
    typography: { fontFamily: `'Nunito', sans-serif` },
    note: 
    { 
        fontFamily: `'Handlee', sans-serif`,
        fontWeight: 600,
        letterSpacing: 1,
        lineHeight: 1.4,
        marginTop: 20,
        marginBottom: 10
    },
    headerTitle:
    {
        fontFamily: `'Nunito', sans-serif`,
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: 1,
        letterSpacing: 2,
        zIndex: 2
    },
    divider:
    {
        width: '100%',
        marginBlock: 10
    },
    cardDivider:
    {
        width: '100%',
        marginTop: 15,
        marginBottom: 10
    }
}));

const Cart = ({cart, updateCartQuantity, removeFromCart, emptyCart}) => 
{
    const classes = useStyles();

    const EmptyCart = () =>
    (
        <>
            <Typography className={classes.typography} variant="h5" gutterBottom>Shopping bag is empty.</Typography>
            <Button component={Link} to='/phones' variant="contained">Let's shopping!</Button>
        </>
    );

    const FilledCart = () =>
    (
        <>
            {cart.line_items.map((item) => (
            <div key={item.id} style={{width: '100%'}}>
                <CartItem item={item} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />
                <Divider className={classes.cardDivider} />
            </div>
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
                    {cart.line_items.length > 0 &&
                    <div className="order-summary">
                        <Typography className={classes.typography} variant="subtitle1" color="textSecondary">Order summary</Typography>
                        <Divider className={classes.divider} />
                        <div className="item">
                            <Typography className={classes.typography}>Number of models:</Typography>
                            <Typography className={classes.typography}>{cart.total_unique_items}</Typography>
                        </div>
                        <div className="item">
                            <Typography className={classes.typography}>Total items:</Typography>
                            <Typography className={classes.typography}>{cart.total_items}</Typography>
                        </div>
                        <div className="item">
                            <Typography className={classes.typography}>Subtotal:</Typography>
                            <Typography className={classes.typography}>{cart.subtotal.formatted_with_symbol}</Typography>
                        </div>
                        <Typography className={classes.note}>The shipping cost will be calculated after you'll fill the checkout form</Typography>
                        <Button style={{width: '100%'}} component={Link} to="/checkout" type="button" variant="contained">
                            Checkout
                        </Button>
                        <Button style={{width: '100%'}} variant="contained" onClick={emptyCart}>
                            Empty Cart
                        </Button>
                    </div>}
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
