import React from 'react';
import { Typography, Button, Divider, makeStyles } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

const useStyles = makeStyles(() => (
{
    typography: 
    { 
        fontFamily: `'Nunito', sans-serif`,
        margin: '20px 0'
    },
    next:
    {
        width: 150,
        color: 'white',
        backgroundColor: '#0c6961',
        textTransform: 'capitalize',
        fontSize: 15,
        '&:hover':
        {
            backgroundColor: '#0c6961E6'
        }
    },
    back:
    {
        textTransform: 'capitalize',
        fontSize: 15,
    }
}));

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({checkoutToken, shippingData, backStep, captureCheckout, nextStep, timeout}) => 
{
    const classes = useStyles();

    const handleSubmit = async (event, elements, stripe) =>
    {
        event.preventDefault();
        if (!stripe || !elements)
            return;
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
        if (error)
            console.log(error);
        else
        {
            const orderData = 
            {
                line_items: checkoutToken.live.line_items,
                customer: 
                { 
                    firstname: shippingData.firstName, 
                    lastname: shippingData.lastName,
                    email: shippingData.email
                },
                shipping: { name: 'International', street: shippingData.address, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment:
                {
                    gateway: 'stripe',
                    stripe:
                    {
                        payment_method_id: paymentMethod.id
                    }
                }
            }
            console.log(orderData);
            captureCheckout(checkoutToken.id, orderData);
            timeout();
            nextStep();
        }
    }

    return (
        <>
            <Review checkoutToken={checkoutToken} shippingOption={shippingData.shippingOption} />
            <Divider />
            <Typography variant="h6" gutterBottom className={classes.typography}>Payment method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /><br />
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Button className={classes.back} variant="outlined" onClick={backStep}>Back</Button>
                                <Button className={classes.next} type="submit" disabled={!stripe}>Complete order</Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm;
