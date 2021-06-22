import React from 'react';
import { Typography, IconButton, Tooltip } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import useStyles from './styles';

const CartItem = ({product, updateCartQuantity, removeFromCart}) => 
{
    const classes = useStyles();

    const Quantity = () => (
        <div className={classes.quantityContainer}>
            <IconButton 
                className={classes.quantityButton} 
                type="button" 
                disableRipple
                size="small"
                onClick={() => updateCartQuantity(product.id, product.quantity - 1)}>
                    <RemoveRoundedIcon style={{color: 'black', fontSize: 18}} />
            </IconButton>
            <Typography className={classes.quantityValue}>{product.quantity}</Typography>
            <IconButton 
                className={classes.quantityButton} 
                type="button" 
                disableRipple
                size="small"
                onClick={() => updateCartQuantity(product.id, product.quantity + 1)}>
                    <AddRoundedIcon style={{color: 'black', fontSize: 18}} />
            </IconButton>
        </div>
    );

    return (
        <div className={classes.container}>
            <img src={product.media.source} alt={product.name} className={classes.image} />
            <div className={classes.info}>
                <Typography className={classes.name} variant="subtitle1">{product.name}</Typography>
                <Typography className={classes.typography} variant="subtitle1">{product.line_total.formatted_with_symbol}</Typography>
                <div className={classes.options}>
                    <Quantity />
                    <Tooltip title="Delete from cart" placement="left" enterNextDelay="1000">
                        <IconButton size="small" onClick={() => removeFromCart(product.id)}>
                            <DeleteRoundedIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
