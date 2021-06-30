import React, { useState, useEffect } from 'react';
import { CssBaseline ,Paper, Stepper, Step, StepLabel, Typography, Divider, Button, CircularProgress, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { commerce } from '../../../lib/commerce';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import Logo from '../../../assets/logo.png';

const outerTheme = createMuiTheme({
    typography: { fontFamily: `'Nunito', sans-serif`, fontSize: 15 },
    overrides:
    {
        MuiStepIcon: 
        {
            root: 
            {
              '&$completed': { color: '#0c6961CC' },
              '&$active': { color: '#0c6961' },
            },
            active: {},
            completed: {},
        },
        MuiCircularProgress:
        {
            colorPrimary: { color: '#0c6961' }
        }
    }
});

const steps = ['Shipping details', 'Payment details'];

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
                Thank you for your purchase! An order summary and confirmation has sent to your email.
            </Typography>
            <div className={classes.logoContainer}>
                <img src={Logo} alt="Phone Zone" className={classes.logo} />
            </div>
            <Divider className={classes.divider} />
            <div className={classes.logoContainer}>
                <Button className={classes.fillButton} component={Link} to='/'>Back to home</Button>
            </div>
        </>
    ) : (
        <div className={classes.spinner}>
            <MuiThemeProvider theme={outerTheme}>
                <CircularProgress />
            </MuiThemeProvider>
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
                    <MuiThemeProvider theme={outerTheme}>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </MuiThemeProvider>
                    {activeStep === steps.length ? finishOrder = true && <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </div>
    )
}

export default Checkout;
