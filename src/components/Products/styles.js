import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    cursor: 'default',
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
    marginBottom: 10
  },
  priceSlider:
  {
    paddingInline: 5,
    marginTop: -5,
    marginBottom: -15,
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
  }
}));