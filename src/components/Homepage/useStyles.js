import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    typography: { fontFamily: `'Nunito', sans-serif`, zIndex: 1 },
    title:
    {
        fontFamily: `'Big Shoulders', sans-serif`,
        textTransform: 'uppercase',
        color: '#ffffffCC',
        lineHeight: 1.1,
        zIndex: 2,
        '&:after':
        {
            content: "'new one today'",
            color: 'white'
        },
        '@media (max-width: 400px)':
        {
            fontSize: 35
        }
    },
    subtitle:
    {
        fontFamily: `'Nunito', sans-serif`,
        lineHeight: 1.3,
        zIndex: 2,
    },
    sectionTitle:
    {
        color: '#0f172a',
        fontFamily: `'Nunito', sans-serif`,
        marginBottom: 20
    },
    opinion: 
    { 
        fontFamily: `'Nunito', sans-serif`,
        lineHeight: 1.2,
        width: '70%',
        marginBottom: 45,
        [theme.breakpoints.down('xs')]:
        {
            width: '100%',
            fontSize: 17
        }
    },
    name:
    {
        fontFamily: `'Nunito', sans-serif`,
        fontWeight: 600,
        marginBottom: -5
    },
    item:
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:
    {
        color: '#0c6961',
        backgroundColor: 'transparent',
        border: '2px solid #0c6961',
        textTransform: 'capitalize',
        borderRadius: 25,
        fontSize: 20,
        width: 160,
        height: 40,
        transition: '0.3s ease-in',
        marginTop: 20,
        '&:hover':
        {
            color: 'white',
            backgroundColor: '#0c6961',
            transition: '0.3s ease-out'
        }
    },
    grid:
    {
        width: '50%',
        [theme.breakpoints.down('md')]: { width: '70%' },
        [theme.breakpoints.down('sm')]: { width: '100%' }
    },
    statisticNumber:
    {
        color: '#0f172a',
        fontFamily: `'Nunito', sans-serif`,
        marginBottom: -7,
        zIndex: 1
    },
    statisticCaption:
    {
        color: '#0f172a',
        fontFamily: `'Nunito', sans-serif`,
        zIndex: 1
    }
}));