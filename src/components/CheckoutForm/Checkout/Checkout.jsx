import React, { useState, useEffect } from 'react';
import { CssBaseline ,Paper, Stepper, Step, StepLabel, Typography, Divider, Button, CircularProgress } from '@material-ui/core';
import { commerce } from '../../../lib/commerce';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({cart, order, captureCheckout, error}) => 
{
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        const generateToken = async () =>
        {
            try 
            {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
                setCheckoutToken(token);
            } catch (error) {
                history.push('/');
            }
        }

        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStip) => prevActiveStip + 1);
    const backStep = () => setActiveStep((prevActiveStip) => prevActiveStip - 1);

    const next = (data) =>
    {
        setShippingData(data);
        nextStep();
    }

    const timeout = () =>
    {
        setTimeout(() => { setIsFinished(true); }, 3000);
    }

    let Confirmation = () => order.customer ? (
        <>
            <Typography variant="h5">Thank for you purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            <br />
            <Button variant="outlined" type="button" component={Link} to='/'>Back to home</Button>
        </>
    ) : isFinished ? (
        <>
            <Typography variant="h5">Thank for you purchase.</Typography>
            <Divider className={classes.divider} />
            <br />
            <Button variant="outlined" type="button" component={Link} to='/'>Back to home</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if (error) 
    {
        Confirmation = () => (
            <>
                <Typography variant="h5">Error: {error}</Typography>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
        );
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} captureCheckout={captureCheckout} timeout={timeout} />

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout;
