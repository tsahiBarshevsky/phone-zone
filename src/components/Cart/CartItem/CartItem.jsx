import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import './styles.sass';
// import useStyles from './styles';

const CartItem = ({item, updateCartQuantity, removeFromCart}) => 
{
    // const classes = useStyles();

    return (
        <div className="root">
            <div className="image-container">
                <img src={item.media.source} alt={item.name} />
            </div>
            <div className="title-and-subtotal">
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="subtitle1">{item.line_total.formatted_with_symbol}</Typography>
            </div>
        </div>
        // <Card className={classes.root}>
        //     <CardContent className={classes.cardContent}>
        //         <div className={classes.imageContainer}>
        //             <img src={item.media.source} alt={item.name} className={classes.media} />
        //         </div>
        //         <div className={classes.info}>
        //             <Typography variant="h6">{item.name}</Typography>
        //             <Typography variant="subtitle1">{item.line_total.formatted_with_symbol}</Typography>
        //         </div>
        //     </CardContent>
        //     <CardActions className={classes.cartActions}>
        //         <div className={classes.buttons}>
        //             <Button type="button" size="small" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</Button>
        //             <Typography>{item.quantity}</Typography>
        //             <Button type="button" size="small" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</Button>
        //         </div>
        //         <Button variant="contained" type="button" color="secondary" onClick={() => removeFromCart(item.id)}>Remove</Button>
        //     </CardActions>
        // </Card>
    )
}

export default CartItem;
