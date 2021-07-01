import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Tooltip } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from './styles';

const Accessory = ({product, onAddToCart}) => 
{
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography className={classes.typography} variant="h6">{product.name}</Typography>
                    <Typography className={classes.typography} variant="subtitle1">{product.price.formatted_with_symbol}</Typography>
                </div>
                <Typography className={classes.description} dangerouslySetInnerHTML={{ __html: product.description }} variant="body1" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Tooltip title="Add to cart" placement="left" enterNextDelay={1000}>
                    <span>
                        <IconButton aria-label="Add to card" onClick={() => onAddToCart(product.id, product.name, 1)}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default Accessory;
