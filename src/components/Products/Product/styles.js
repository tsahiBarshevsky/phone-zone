import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root:
    {
      maxWidth: '100%',
      borderRadius: 10,
      cursor: 'default'
    },
    media: 
    {
      height: 0,
      paddingTop: '56.25%', // 16:9
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
      fontFamily: `'Baloo Tammudu 2', sans-serif`
    },
    description:
    {
      fontFamily: `'Baloo Tammudu 2', sans-serif`,
      lineHeight: 1.5
    }
}));