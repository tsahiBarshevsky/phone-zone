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
    [theme.breakpoints.down('xs')]:
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
    [theme.breakpoints.down('xs')]:
    {
      width: '100%',
      marginBottom: 25
    }
    // backgroundColor: 'lightgreen',
  },
  title:
  {
    fontFamily: `'Dosis', sans-serif`,
    marginBottom: 10
  },
  priceSlider:
  {
    paddingInline: 5,
    marginTop: -5,
    marginBottom: -15,
    cursor: 'default',
    width: 250,
    [theme.breakpoints.down('xs')]:
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
    fontFamily: `'Dosis', sans-serif`
  },
  caption:
  {
    fontFamily: `'Dosis', sans-serif`,
    fontWeight: 600
  }
}));