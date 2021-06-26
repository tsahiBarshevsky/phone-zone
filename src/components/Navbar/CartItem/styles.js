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
        width: 90,
        height: 100,
        marginRight: 10
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
    quantityContainer:
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: 20,
        height: 'fit-content'
    },
    quantityButton:
    {
        backgroundColor: 'transparent',
        '&:hover':
        {
            backgroundColor: 'transparent'
        }
    },
    quantityValue:
    {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingInline: 10,
        borderRight: '1px solid black',
        borderLeft: '1px solid black',
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