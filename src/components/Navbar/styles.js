import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  
  
  goToCart:
  {
    width: '100%'
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
  link:
  {
    height: 52
  }
}));