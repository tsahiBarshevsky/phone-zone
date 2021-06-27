import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root:
  {
    width: '100%',
    marginBlock: 20,
    padding: 5,
    borderRadius: 10
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  imageContainer:
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 233,
    marginRight: 15,
    backgroundColor: 'lightblue',
    [theme.breakpoints.down('xs')]:
    {
      display: 'none'
    }
  },
  media: {
    height: 200,
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));