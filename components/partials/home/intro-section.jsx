import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInRightShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

function IntroSection ( props ) {
    return (
        <div className="row">
            <div className="col-lg-9 mb-4">
                <OwlCarousel adClass="owl-theme owl-dot-inner intro-slider animation-slider" options={ introSlider }>
                    <div className="banner banner-fixed content-middle intro-slide intro-slide1 banner-radius" style={ { backgroundColor: "#f8f8f8" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/slides/catalogo-celulares.jpg"
                                alt="Banner"
                                width="1030"
                                height="450"
                            />
                        </figure>
                        <div className="banner-content">
                            <Reveal keyframes={ fadeInLeftShorter } duration={ 1000 }>
                                <h5 className="banner-subtitle text-capitalize font-weight-normal">Tu distribuidor</h5>
                                <h3 className="banner-title text-uppercase font-weight-bold ls-m"> MAYORISTA</h3>
                                <div className="banner-price-info font-weight-semi-bold text-body text-uppercase ls-m">
                                    de confianza.
                                </div>
                                <ALink href="/shop/?category=celulares" className="btn btn-dark btn-outline btn-rounded" style={{color:'white'}}>
                                    Ver Catálogos<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                    <div className="banner banner-fixed content-middle intro-slide intro-slide2 banner-radius" style={ { backgroundColor: "#e2e2e3" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/slides/tvs.jpg"
                                alt="Banner"
                                width="1030"
                                height="450"
                            />
                        </figure>
                        <div className="banner-content text-right">
                            <Reveal keyframes={ fadeInRightShorter } duration={ 1000 }>
                                <h3 className="banner-title text-uppercase font-weight-bold ls-m" style={{color:'white'}}>SMART TV</h3>
                                <h5 className="banner-subtitle text-capitalize font-weight-normal" style={{color:'white'}}>COLORES REALISTAS</h5>
                                <div className="banner-price-info font-weight-semi-bold text-white text-uppercase ls-m">
                                    Descubre la TV que se <span className="text-primary"></span>
                                </div>
                                <h5 className="text-white font-weight-normal">ADAPTE MÁS A TI</h5>
                                {/* 
                                <ALink href="/shop" className="btn btn-dark btn-outline btn-rounded">
                                    Comprar<i className="d-icon-arrow-right"></i></ALink>
                                */}
                                <ALink target="_blank" href="https://web.whatsapp.com/send?phone=593939991111&text=Hola."
                               className="text-primary d-inline-block">
                                <button className={`btn-product btn-cart text-normal ls-normal font-weight-semi-bold `}><i
                                className='fab fa-whatsapp'></i>Consultar Disponibilidad
                                </button>
                                </ALink>
                            </Reveal>
                        </div>
                    </div>
                    {/*<div className="banner banner-fixed content-middle intro-slide intro-slide3 banner-radius" style={ { backgroundColor: "#d8dee4" } }>*/}
                    {/*    <figure>*/}
                    {/*        <LazyLoadImage*/}
                    {/*            src="images/home/slides/3.jpg"*/}
                    {/*            alt="Banner"*/}
                    {/*            width="1030"*/}
                    {/*            height="450"*/}
                    {/*        />*/}
                    {/*    </figure>*/}
                    {/*    <div className="banner-content">*/}
                    {/*        <Reveal keyframes={ fadeInLeftShorter } duration={ 1000 }>*/}
                    {/*            <h5 className="banner-subtitle text-capitalize font-weight-normal mb-1">Tu TV ideal</h5>*/}
                    {/*            <h3 className="banner-title text-uppercase font-weight-bold ls-m">Smart TV</h3>*/}
                    {/*            <div className="banner-price-info font-weight-semi-bold text-dark text-uppercase ls-m">*/}
                    {/*                Brillante y colorido, <span className="text-primary">QLED 4k</span>*/}
                    {/*            </div>*/}
                    {/*            <p className="text-dark font-weight-normal">Explora cual de nuestras TVs, se adapta más a ti</p>*/}
                    {/*            <ALink href="/shop" className="btn btn-dark btn-outline btn-rounded">Comprar<i className="d-icon-arrow-right"></i></ALink>*/}
                    {/*        </Reveal>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </OwlCarousel >
            </div>
            <div className="col-lg-3">
                <div className="row cols-lg-1 cols-sm-2 cols-1">
                    <div className="intro-banner mb-4">
                        <div className="banner banner-fixed content-middle banner-radius overlay-zoom" style={ { backgroundColor: "#232323" } }>
                            <figure>
                                <LazyLoadImage
                                    src="images/home/banner/subcategoria-accesorios.jpg"
                                    alt="Intro Banner"
                                    width="330"
                                    height="215"
                                />
                            </figure>
                            <div className="banner-content">
                                <h3 className="banner-title font-weight-bold text-white ls-m">ACCESORIOS</h3>
                                <div className="product-count text-uppercase text-white font-weight-semi-bold">HIPERTRONICS</div>
                                <span className="divider bg-white"></span>
                                <ALink href="/shop/?category=accesorios" className="btn btn-white btn-link btn-underline ls-m">
                                    Ver Catálogo<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                    <div className="intro-banner mb-4">
                        <div className="banner banner-fixed content-middle banner-radius overlay-zoom" style={ { backgroundColor: "#eca5a9" } }>
                            <figure>
                                <LazyLoadImage
                                    src="images/home/banner/subcategoria-sistema.jpg"
                                    alt="Intro Banner"
                                    width="330"
                                    height="215"
                                />
                            </figure>
                            <div className="banner-content">
                                <h3 className="banner-title font-weight-bold text-white ls-m">SISTEMA</h3>
                                <div className="product-count text-uppercase text-white font-weight-semi-bold">HIPERTRONICS</div>
                                <span className="divider bg-white"></span>
                                <ALink href="https://app.hipertronics.us/clientes/" className="btn btn-white btn-link btn-underline ls-m">
                                    Ingresar<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( IntroSection );