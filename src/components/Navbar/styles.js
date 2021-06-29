import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: 
  {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  
  image: {
    marginRight: '10px',
    cursor: 'pointer'
  },
  divider:
  {
    width: '100%',
    marginBlock: 10
  },
  paper:
  {
    width: 500,
    paddingBlock: 10,
    paddingInline: 15,
    cursor: 'default',
    [theme.breakpoints.down('xs')]:
    {
      width: '100%'
    }
  },
  header:
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  items:
  {
    height: '100%',
    overflowY: 'auto',
  },
  checkout:
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 120,
  },
  subtotal:
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyCart:
  {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%'
  },
  cardSubtotal:
  {
    color: '#d32f2f',
    fontFamily: `'Nunito', sans-serif`,
    fontWeight: 600,
    marginLeft: 8
  },
  typography:
  {
    fontFamily: `'Nunito', sans-serif`,
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
    marginTop: 10,
    '&:hover':
    {
      color: 'white',
      backgroundColor: '#0c6961',
      transition: 'all 0.2s ease-in'
    }
  }
}));