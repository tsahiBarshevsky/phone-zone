import React, { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-up';
import { TiArrowUp } from 'react-icons/ti';
import './styles.sass';

// const useStyles = makeStyles(() => ({
//     toTop:
//     {
//         color: '#212121',
//         zIndex: 20,
//         position: 'fixed',
//         bottom: 9,
//         right: 8,
//         border: '2px solid #212121',
//         backgroundColor: 'transparent',
//         transition: '0.3s ease-out',
//         "&:hover":
//         {
//             color: 'white',
//             border: '2px solid #212121',
//             backgroundColor: '#212121',
//             transform: 'translateY(-5%)',
//             transition: '0.3s ease-in',
//         }
//     },
//     arrow:
//     {
//         fontSize: 60
//     }
// }));

const BackToTopButton = ({showBelow}) => 
{
    // const clasess = useStyles();
    const [show, setShow] = useState(showBelow ? false : true);
    const scrollToTopStyle = {
        transitionDuration: '0.7s',
        bottom: 30,
        zIndex: 20
    }
    
    const handleScroll = () =>
    {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true);
        } else {
            if (show) setShow(false);
        }
    }

    useEffect(() =>
    {
        if (showBelow)
        {
            window.addEventListener(`scroll`, handleScroll);
            return () => window.removeEventListener(`scroll`, handleScroll);
        }
    })

    return (
        <ScrollToTop duration={1250} showUnder={70} style={scrollToTopStyle}>
            <span className="container">
                <TiArrowUp className="icon" />
                <p className="text top">Top</p>
                <p className="text">To</p>
            </span>
        </ScrollToTop>
    )
}

export default BackToTopButton;


// import React from 'react';
// import { TiArrowUp } from 'react-icons/ti';
// // import BackToTop from "react-back-to-top-button";
// import './styles.sass';

// const BackToTopButton = () => 
// {
//     return (
        
//     )
// }

// export default BackToTopButton;
