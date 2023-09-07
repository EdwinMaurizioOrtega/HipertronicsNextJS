import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import CountUp from 'react-countup';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeIn, fadeInLeftShorter } from '~/utils/data/keyframes';
import { mainSlider16 } from '~/utils/data/carousel';

function terminos() {
    useEffect( () => {
        countToHandler();
        window.addEventListener( 'scroll', countToHandler, true );
    
        return () => {
            window.removeEventListener( 'scroll', countToHandler );
        }
    }, [] )
    
    function countToHandler() {
        let items = document.querySelectorAll( '.count-to' );
    
        for ( let i = 0; i < items.length; i++ ) {
            let item = items[ i ];
            if ( item.getBoundingClientRect().top > 0 && window.innerHeight - item.offsetHeight > item.getBoundingClientRect().top && !item.classList.contains( 'finished' ) ) {
                if ( item.querySelector( 'button' ) ) item.querySelector( 'button' ).click();
                item.classList.add( 'finished' );
            }
        }
    }

    return (

        
        <main className="main about-us">
            <Helmet>
                <title>Riode React eCommerce Template | About Us</title>
            </Helmet>
        
            <h1 className="d-none">Riode React eCommerce Template - About Us</h1>
        
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                        <li>Sobre Nosotros</li>
                    </ul>
                </div>
            </nav>
            <div className="page-header pl-4 pr-4"
                style={ { backgroundImage: `url( ./images/page-header/about-us.jpg )`, backgroundColor: "#3C63A4" } }>
                <h3 className="page-subtitle text-black font-weight-bold">¡Bienvenido a Hipertronics!</h3>
                {/* 
                <h1 className="page-title font-weight-bold lh-1 text-black text-capitalize" style={{color: 'coral !important'}}>¿Quiénes somos?</h1>
                <p className="page-desc text-black mb-0">Desde el 2007 trabajando por  liderar el mercado innovador y <br /> tecnológico en el Ecuador.</p>
                */}
            </div>
        </main>
    )

}

export default React.memo( terminos );