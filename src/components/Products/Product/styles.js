import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root:
    {
      width: 350,
      borderRadius: 10,
      cursor: 'default',
      [theme.breakpoints.down('xs')]:
      {
        width: '100%'
      }
    },
    media: 
    {
      height: 0,
      paddingTop: '56.25%', // 16:9
      marginBottom: 10,
      backgroundPosition: 'center top',
    },
    cardActions: 
    {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: 0
    },
    cardContent: 
    {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    },
    typography:
    {
      fontFamily: `'Nunito', sans-serif`,
      lineHeight: 1.2
    },
    description:
    {
      fontFamily: `'Nunito', sans-serif`,
      lineHeight: 1.5,
      marginBottom: 15
    },
    link:
    {
      textDecoration: 'none',
      color: 'black',
      fontSize: 18,
      transition: 'color 0.5s ease-in-out',
      '&:hover':
      {
      marginTop: 20,
        color: '#0c6961'
      }
    }
}));