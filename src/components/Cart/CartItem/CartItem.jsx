import React from 'react';
import { Typography, Button, IconButton, Tooltip, makeStyles } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import './styles.sass';

const useStyles = makeStyles(() => ({
    typography: { fontFamily: `'Nunito', sans-serif` },
    title: 
    {
        fontFamily: `'Nunito', sans-serif`,
        fontWeight: 600,
        letterSpacing: 1,
        lineHeight: 1.2,
        marginRight: 5
    }
}));

const CartItem = ({item, updateCartQuantity, removeFromCart}) => 
{
    const classes = useStyles();

    return (
        <div className="root">
            <div className="image-container">
                <img src={item.media.source} alt={item.name} />
            </div>
            <div className="info">
                <div className="title-and-subtotal">
                    <Typography className={classes.title} variant="h6">{item.name}</Typography>
                    <Typography className={classes.typography} variant="subtitle1">{item.line_total.formatted_with_symbol}</Typography>
                </div>
                <Typography className={classes.typography} variant="subtitle1" color="textSecondary">Model's price: {item.price.formatted_with_symbol}</Typography>
                <Typography className={classes.typography} variant="subtitle1" color="textSecondary">Quntity: {item.quantity}</Typography>
                <div className="options">
                    <div className="numeric-quantity-button">
                        <Button className="button" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
                            <RemoveRoundedIcon className="icon" />
                        </Button>
                        <Typography className={classes.typography}>{item.quantity}</Typography>
                        <Button className="button" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                            <AddRoundedIcon className="icon" />
                        </Button>
                    </div>
                    <Tooltip title="Remove from cart" placement="left" enterNextDelay={1000}>
                        <span>
                            <IconButton type="button" size="small" onClick={() => removeFromCart(item.id)}>
                                <DeleteRoundedIcon />
                            </IconButton>
                        </span>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
