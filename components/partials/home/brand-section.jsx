import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { mainSlider6 } from '~/utils/data/carousel';
function BrandSection () {
    
    return (
        <>
        
        <section className="category-wrapper mt-10 pt-6 mb-10 pb-8">
            <div className="container">
                <OwlCarousel className="owl-theme" options={ mainSlider6 }>
                    <div className="banner banner-fixed category-banner1 content-middle banner-radius" style={ { backgroundColor: "#e2e2e2" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/categoria-honor.jpg"
                                alt="Category Banner"
                                width="446"
                                height="180"
                            />
                        </figure>
                        <div className="banner-content">
                        <h4 className="banner-subtitle text-white font-weight-semi-bold text-uppercase ls-s">DISTRIBUIDORES</h4>
                            <h3 className="banner-title text-white font-weight-normal ls-m"><strong className="text-uppercase">AUTORIZADOS</strong></h3>
                            <span className="divider bg-dark"></span>
                            <ALink href="/shop" className="btn btn-dark btn-link btn-underline" style={{ color: 'white' }} >Comprar Ahora<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>
                    <div className="banner banner-fixed category-banner2 content-middle banner-radius" style={ { backgroundColor: "#373a3e" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/categoria-tcl.jpg"
                                alt="Category Banner"
                                width="446"
                                height="180"
                            />
                        </figure>
                        <div className="banner-content">
                            <h4 className="banner-subtitle text-black font-weight-semi-bold text-uppercase ls-s">DISTRIBUIDORES</h4>
                            <h3 className="banner-title text-black font-weight-normal ls-m"><strong className="text-uppercase">AUTORIZADOS</strong></h3>
                            <span className="divider bg-white"></span>
                            <ALink href="/shop" className="btn btn-white btn-link btn-underline" style={{ color: 'white' }}>Comprar ahora<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>
                    <div className="banner banner-fixed category-banner1 content-middle banner-radius" style={ { backgroundColor: "#d7d6d3" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/categoria-nokia.jpg"
                                alt="Category Banner"
                                width="446"
                                height="180"
                            />
                        </figure>
                        <div className="banner-content">
                        <h4 className="banner-subtitle text-white font-weight-semi-bold text-uppercase ls-s">DISTRIBUIDORES</h4>
                            <h3 className="banner-title text-white font-weight-normal ls-m"><strong className="text-uppercase">AUTORIZADOS</strong></h3>
                            <span className="divider bg-dark"></span>
                            <ALink href="/shop" className="btn btn-dark btn-link btn-underline" style={{ color: 'white' }} >Comprar ahora<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
        
        <section className="brand-wrapper mb-10 pb-7">
            <div className="container">
                <h2 className="title title-line title-underline">Marcas En Las Que Confiamos</h2>

                <div className="row cols-lg-3 cols-md-4 cols-sm-3 cols-2 gutter-xs">
                    <div className="image-wrap">
                        <figure>
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/brand/1.jpg"
                                    alt="Brand"
                                    width="228"
                                    height="100"
                                    effect="opacity"
                                />
                            </ALink>
                        </figure>
                    </div>
                    <div className="image-wrap">
                        <figure>
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/brand/2.jpg"
                                    alt="Brand"
                                    width="228"
                                    height="100"
                                    effect="opacity"
                                />
                            </ALink>
                        </figure>
                    </div>
                    {/*<div className="image-wrap">*/}
                    {/*    <figure>*/}
                    {/*        <ALink href="#">*/}
                    {/*            <LazyLoadImage*/}
                    {/*                src="images/home/brand/3.jpg"*/}
                    {/*                alt="Brand"*/}
                    {/*                width="228"*/}
                    {/*                height="100"*/}
                    {/*                effect="opacity"*/}
                    {/*            />*/}
                    {/*        </ALink>*/}
                    {/*    </figure>*/}
                    {/*</div>*/}
                    {/*<div className="image-wrap">*/}
                    {/*    <figure>*/}
                    {/*        <ALink href="#">*/}
                    {/*            <LazyLoadImage*/}
                    {/*                src="images/home/brand/4.jpg"*/}
                    {/*                alt="Brand"*/}
                    {/*                width="228"*/}
                    {/*                height="100"*/}
                    {/*                effect="opacity"*/}
                    {/*            />*/}
                    {/*        </ALink>*/}
                    {/*    </figure>*/}
                    {/*</div>*/}
                    <div className="image-wrap">
                        <figure>
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/brand/5.jpg"
                                    alt="Brand"
                                    width="228"
                                    height="100"
                                    effect="opacity"
                                />
                            </ALink>
                        </figure>
                    </div>
                    <div className="image-wrap">
                        <figure>
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/brand/2.jpg"
                                    alt="Brand"
                                    width="228"
                                    height="100"
                                    effect="opacity"
                                />
                            </ALink>
                        </figure>
                    </div>
                    <div className="image-wrap">
                        <figure>
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/brand/honor-loogo.png"
                                    alt="Brand"
                                    width="228"
                                    height="100"
                                    effect="opacity"
                                />
                            </ALink>
                        </figure>
                    </div>
                    <div className="image-wrap">
                        <figure>
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/brand/8.jpg"
                                    alt="Brand"
                                    width="228"
                                    height="100"
                                    effect="opacity"
                                />
                            </ALink>
                        </figure>
                    </div>
                    {/*<div className="image-wrap">*/}
                    {/*    <figure>*/}
                    {/*        <ALink href="#">*/}
                    {/*            <LazyLoadImage*/}
                    {/*                src="images/home/brand/6.jpg"*/}
                    {/*                alt="Brand"*/}
                    {/*                width="228"*/}
                    {/*                height="100"*/}
                    {/*                effect="opacity"*/}
                    {/*            />*/}
                    {/*        </ALink>*/}
                    {/*    </figure>*/}
                    {/*</div>*/}
                    {/*<div className="image-wrap">*/}
                    {/*    <figure>*/}
                    {/*        <ALink href="#">*/}
                    {/*            <LazyLoadImage*/}
                    {/*                src="images/home/brand/7.jpg"*/}
                    {/*                alt="Brand"*/}
                    {/*                width="228"*/}
                    {/*                height="100"*/}
                    {/*                effect="opacity"*/}
                    {/*            />*/}
                    {/*        </ALink>*/}
                    {/*    </figure>*/}
                    {/*</div>*/}
                    {/*<div className="image-wrap">*/}
                    {/*    <figure>*/}
                    {/*        <ALink href="#">*/}
                    {/*            <LazyLoadImage*/}
                    {/*                src="images/home/brand/8.jpg"*/}
                    {/*                alt="Brand"*/}
                    {/*                width="228"*/}
                    {/*                height="100"*/}
                    {/*                effect="opacity"*/}
                    {/*            />*/}
                    {/*        </ALink>*/}
                    {/*    </figure>*/}
                    {/*</div>*/}
                    {/*<div className="image-wrap">*/}
                    {/*    <figure>*/}
                    {/*        <ALink href="#">*/}
                    {/*            <LazyLoadImage*/}
                    {/*                src="images/home/brand/9.jpg"*/}
                    {/*                alt="Brand"*/}
                    {/*                width="228"*/}
                    {/*                height="100"*/}
                    {/*                effect="opacity"*/}
                    {/*            />*/}
                    {/*        </ALink>*/}
                    {/*    </figure>*/}
                    {/*</div>*/}
                    {/*<div className="image-wrap">*/}
                    {/*    <figure>*/}
                    {/*        <ALink href="#">*/}
                    {/*            <LazyLoadImage*/}
                    {/*                src="images/home/brand/11.jpg"*/}
                    {/*                alt="Brand"*/}
                    {/*                width="228"*/}
                    {/*                height="100"*/}
                    {/*                effect="opacity"*/}
                    {/*            />*/}
                    {/*        </ALink>*/}
                    {/*    </figure>*/}
                    {/*</div>*/}
                    {/*<div className="image-wrap">*/}
                    {/*    <figure>*/}
                    {/*        <ALink href="#">*/}
                    {/*            <LazyLoadImage*/}
                    {/*                src="images/home/brand/10.jpg"*/}
                    {/*                alt="Brand"*/}
                    {/*                width="228"*/}
                    {/*                height="100"*/}
                    {/*                effect="opacity"*/}
                    {/*            />*/}
                    {/*        </ALink>*/}
                    {/*    </figure>*/}
                    {/*</div>*/}
                    {/*<div className="image-wrap">*/}
                    {/*    <figure>*/}
                    {/*        <ALink href="#">*/}
                    {/*            <LazyLoadImage*/}
                    {/*                src="images/home/brand/12.jpg"*/}
                    {/*                alt="Brand"*/}
                    {/*                width="228"*/}
                    {/*                height="100"*/}
                    {/*                effect="opacity"*/}
                    {/*            />*/}
                    {/*        </ALink>*/}
                    {/*    </figure>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
        </>
    )
}

export default React.memo( BrandSection);