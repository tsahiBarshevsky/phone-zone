import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/accessories.jpg';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    cursor: 'default',
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
      backgroundPosition: '50% 80%',
      // backgroundPositionY: 'center',
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
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(5),
    [theme.breakpoints.down('sm')]:
    {
      flexDirection: 'column'
    }
  },
  item:
  {
    display: 'flex',
    justifyContent: 'center'
  },
  filters:
  {
    width: 'fit-content',
    paddingInline: 5,
    marginRight: 20,
    [theme.breakpoints.down('sm')]:
    {
      width: '100%',
      marginBottom: 25
    },
  },
  title:
  {
    fontFamily: `'Nunito', sans-serif`,
    marginBottom: 10,
    lineHeight: 1
  },
  priceSlider:
  {
    paddingInline: 5,
    marginTop: -5,
    marginBottom: -10,
    cursor: 'default',
    width: 250,
    [theme.breakpoints.down('sm')]:
    {
      width: '100%'
    }
  },
  range:
  {
    display: 'flex',
    justifyContent: 'space-between'
  },
  typography:
  {
    fontFamily: `'Nunito', sans-serif`
  },
  caption:
  {
    fontFamily: `'Nunito', sans-serif`,
    fontWeight: 600
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: 'all 0.3s ease-in'
  },
  expandOpen: 
  {
    transform: 'rotate(90deg)',
    transition: 'all 0.3s ease-out'
  },
  header:
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formControl:
  {
    width: '100%',
    marginTop: 5,
    marginBottom: 20
  },
  button:
  {
    color: '#0c6961',
    width: '100%',
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