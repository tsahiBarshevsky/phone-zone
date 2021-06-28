import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container:
    {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 20,
        cursor: 'default'
        // backgroundColor: 'lightskyblue',
    },
    image:
    {
        width: 100,
        minWidth: 100,
        height: 100,
        marginRight: 20
    },
    info:
    {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 5,
    },
    numericQuantityButton:
    {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 125,
        height: 'fit-content',
        border: '1px solid #80808080',
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 1
    },
    button:
    {
        minWidth: 40,
        width: 40,
        height: 32,
        backgroundColor: '#0c6961',
        '&:hover':
        {
            backgroundColor: '#0c6961CC'
        }
    },
    icon:
    {
        fontSize: 15,
        color: 'white'
    },
    options:
    {
        width: '100%',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingBlock: 5,
        transform: 'translateY(20%)',
    },
    name:
    {
      fontFamily: `'Nunito', sans-serif`,
      fontSize: 18,
      fontWeight: 600,
      marginBottom: -7
    },
    typography:
    {
        fontFamily: `'Nunito', sans-serif`,
    }
}));