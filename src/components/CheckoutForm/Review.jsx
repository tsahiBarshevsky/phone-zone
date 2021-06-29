import React from 'react';
import { Typography, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => (
    {
        typography: { fontFamily: `'Nunito', sans-serif` }
    }));

const Review = ({checkoutToken, shippingOption}) => 
{
    const classes = useStyles();

    const renderTotalPrice = () =>
    {
        if (shippingOption === 'ship_LvJjoP27qle0nO') // Europe - add $10
            return (`$${checkoutToken.live.subtotal.raw + 10}.00`).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return checkoutToken.live.subtotal.formatted_with_symbol;
    }

    return (
        <>
            <Typography variant="h5" gutterBottom className={classes.typography}>Order summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0'}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0', marginBottom: -20}}>
                    <ListItemText primary="Shipment" />
                    <Typography variant="body2">
                        {shippingOption === 'ship_LvJjoP27qle0nO' ? '$10.00' : 'free'}
                    </Typography>
                </ListItem>
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{fontWeight: 700}}>
                        {renderTotalPrice()}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review;
