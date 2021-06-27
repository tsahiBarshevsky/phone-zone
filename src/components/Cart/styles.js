import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/shopping-bag.jpg';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main:
  {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  header:
  {
    width: '100%',
    height: 250,
    position: 'relative',
    backgroundColor: 'lightskyblue',
    '&::after':
    {
      content: 'fff',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      opacity: 0.5,
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 0',
      backgroundPositionY: 'center',
      backgroundSize: 'cover',
      pointerEvents: 'none',
      filter: 'blur(1.5px)'
    }
  },











  title: {
    marginTop: '5%',
    fontFamily: `'Nunito', sans-serif`
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));