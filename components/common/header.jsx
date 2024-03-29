import { useEffect } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
import MainMenu from '~/components/common/partials/main-menu';
import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header ( props ) {
    const router = useRouter();

    useEffect( () => {
        let header = document.querySelector( 'header' );
        if ( header ) {
            if ( headerBorderRemoveList.includes( router.pathname ) && header.classList.contains( 'header-border' ) ) header.classList.remove( 'header-border' )
            else if ( !headerBorderRemoveList.includes( router.pathname ) ) document.querySelector( 'header' ).classList.add( 'header-border' );
        }
    }, [ router.pathname ] )


    const showMobileMenu = () => {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <p className="welcome-msg ls-normal">HT Premium - Cashback: Te devolvemos tu DINERO!</p>
                    </div>
                    <div className="header-right">
                        {/*<div className="dropdown">*/}
                        {/*    <ALink href="#">USD</ALink>*/}
                        {/*    <ul className="dropdown-box">*/}
                        {/*        <li><ALink href="#">USD</ALink></li>*/}
                        {/*        <li><ALink href="#">EUR</ALink></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                        {/*<div className="dropdown ml-5">*/}
                        {/*    <ALink href="#">ENG</ALink>*/}
                        {/*    <ul className="dropdown-box">*/}
                        {/*        <li>*/}
                        {/*            <ALink href="#">ENG</ALink>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <ALink href="#">FRH</ALink>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/* */}

                        <span className="divider"></span>
                        <ALink href="/vendor" className="contact d-lg-show">{/*<i className="d-icon-map"></i>*/}Locales</ALink>
                        <ALink href="/pages/account" className="help d-lg-show">{/*<i className="d-icon-info"></i>*/} Mi cuenta</ALink>
                        <LoginModal />
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header fix-top sticky-content">
                <div className="container">
                    <div className="header-left mr-4">
                        <ALink href="#" className="mobile-menu-toggle" onClick={ showMobileMenu }>
                            <i className="d-icon-bars2"></i>
                        </ALink>

                        <ALink href="/">
                            <img src='./images/home/logo.png' alt="logo" style={{height: '75px'}} />
                        </ALink>

                        <SearchBox />
                    </div>

                    <div className="header-right">
                        <div className="icon-box icon-box-side">
                            <div className="icon-box-icon mr-0 mr-lg-2">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <div className="icon-box-content d-lg-show">
                                <h4 className="icon-box-title text-dark text-normal">
                                    <ALink target="_blank" href="https://web.whatsapp.com/send?phone=593939991111&text=Hola." className="text-primary d-inline-block">Ventas WhatsApp</ALink>:</h4>
                                <p><ALink href="tel:#">093 999 1111</ALink></p>
                            </div>
                        </div>
                    {/*
                        <span className="divider mr-4"></span>
                        <ALink href="#" className="compare">
                            <i className="d-icon-compare"></i>
                        </ALink>
                        <ALink href="/pages/wishlist" className="wishlist">
                            <i className="d-icon-heart"></i>
                        </ALink>
                        <span className="divider"></span>
                    */}
                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom has-center sticky-header fix-top sticky-content d-lg-show">
                <div className="container">
                    <div className="inner-wrap">
                        <div className="header-left"></div>

                        <div className="header-center">
                    <MainMenu />
                        </div>

                        <div className="header-right"></div>
                    </div>
                </div>
            </div>
        </header >
    );
}