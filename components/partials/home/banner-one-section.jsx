import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { mainSlider6 } from '~/utils/data/carousel';

function BannerOneSection () {
    return (
        <section className="category-wrapper mt-10 pt-6 mb-10 pb-8">
            <div className="container">
                <OwlCarousel className="owl-theme" options={ mainSlider6 }>
                    <div className="banner banner-fixed category-banner1 content-middle banner-radius" style={ { backgroundColor: "#e2e2e2" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/categoria-samsung.jpg"
                                alt="Category Banner"
                                width="446"
                                height="180"
                            />
                        </figure>
                        <div className="banner-content">
                        <h4 className="banner-subtitle text-black font-weight-semi-bold text-uppercase ls-s">DISTRIBUIDORES</h4>
                            <h3 className="banner-title text-black font-weight-normal ls-m"><strong className="text-uppercase">AUTORIZADOS</strong></h3>
                            <span className="divider bg-dark"></span>
                            <ALink href="shop/?category=celulares&brand=samsung" className="btn btn-dark btn-link btn-underline" style={{ color: 'white' }}>Comprar Ahora<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>
                    <div className="banner banner-fixed category-banner2 content-middle banner-radius" style={ { backgroundColor: "#373a3e" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/categoria-infinix.jpg"
                                alt="Category Banner"
                                width="446"
                                height="180"
                            />
                        </figure>
                        <div className="banner-content">
                        <h4 className="banner-subtitle text-white font-weight-semi-bold text-uppercase ls-s">DISTRIBUIDORES</h4>
                            <h3 className="banner-title text-white font-weight-normal ls-m"><strong className="text-uppercase">AUTORIZADOS</strong></h3>
                            <span className="divider bg-white"></span>
                            <ALink href="shop/?category=celulares&brand=infinix" className="btn btn-white btn-link btn-underline" style={{ color: 'white' }}>Comprar ahora<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>
                    <div className="banner banner-fixed category-banner1 content-middle banner-radius" style={ { backgroundColor: "#d7d6d3" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/category/categoria-xiaomi.jpg"
                                alt="Category Banner"
                                width="446"
                                height="180"
                            />
                        </figure>
                        <div className="banner-content">
                        <h4 className="banner-subtitle text-black font-weight-semi-bold text-uppercase ls-s">DISTRIBUIDORES</h4>
                            <h3 className="banner-title text-black font-weight-normal ls-m"><strong className="text-uppercase">AUTORIZADOS</strong></h3>
                            <span className="divider bg-dark"></span>
                            <ALink href="shop/?category=celulares&brand=xiaomi" className="btn btn-dark btn-link btn-underline" style={{ color: 'white' }}>Comprar ahora<i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    )
}

export default React.memo( BannerOneSection );