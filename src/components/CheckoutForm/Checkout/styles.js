import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../assets/checkout.jpg';

export default makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
  root:
  {
    cursor: 'default'
  },
  layout:
  {
    marginTop: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageHeader:
  {
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: 'white',
    paddingInline: 15,
    backgroundColor: '#0c6961',
    zIndex: 1,
    '&::after':
    {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      opacity: 0.15,
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 0',
      backgroundPositionY: 'center',
      backgroundSize: 'cover',
      pointerEvents: 'none',
      filter: 'blur(1.5px)'
    }
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
  typography:
  {
    fontFamily: `'Nunito', sans-serif`
  },
  logoContainer:
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  },
  logo:
  {
    width: 'auto',
    height: 'auto'
  },
  buttonContainer:
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  fillButton:
  {
    color: '#0c6961',
    width: 170,
    border: '2px solid #0c6961',
    borderRadius: 25,
    fontSize: 16,
    height: 38,
    textTransform: 'capitalize',
    backgroundColor: 'transparent',
    letterSpacing: 1,
    transition: 'all 0.2s ease-out',
    '&:hover':
    {
        color: 'white',
        backgroundColor: '#0c6961',
        transition: 'all 0.2s ease-in'
    }
  }
}));