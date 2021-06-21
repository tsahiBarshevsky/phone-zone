import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container:
    {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        // backgroundColor: 'lightskyblue',
        marginBottom: 20
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
        paddingInline: 10,
        borderRight: '1px solid black',
        borderLeft: '1px solid black'
    },
    options:
    {
        width: '100%',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    }
}));