import React, { useState, useEffect } from 'react';
import { CssBaseline ,Paper, Stepper, Step, StepLabel, Typography, Divider, Button, CircularProgress } from '@material-ui/core';
import { commerce } from '../../../lib/commerce';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import Logo from '../../../assets/logo.png';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({cart, order, captureCheckout, error}) => 
{
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const classes = useStyles();
    const history = useHistory();
    var finishOrder = false;

    useEffect(() => {
        const generateToken = async () =>
        {
            try 
            {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
                setCheckoutToken(token);
            } catch (error) 
            {
                if (!finishOrder)
                    history.push('/');
                else
                    console.log('Its Confirmation');
            }
        }

        generateToken();
    }, [cart, history, finishOrder]);

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

    let Confirmation = () => isFinished ? (
        <>
            <Typography className={classes.typography} variant="h5" align="center">
                Thank you for your purchase! An email with an order summary and confirmation has sent to you.
            </Typography>
            <img src={Logo} alt="Phone Zone" className={classes.logo} />
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
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.toolbar} />
            <div className={classes.pageHeader}>
                <Typography variant="h3" className={classes.headerTitle}>Checkout</Typography>
            </div>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? finishOrder = true && <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </div>
    )
}

export default Checkout;
