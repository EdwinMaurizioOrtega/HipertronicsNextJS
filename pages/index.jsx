import React from 'react';
import { Helmet } from 'react-helmet';

import productos from '../pages/api/demo-market1.json'; // Ruta correcta hacia el archivo JSON

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import ServiceBox from '~/components/partials/home/service-section';
import DealCollection from '~/components/partials/home/deal-collection';
import CategorySection from '~/components/partials/home/category-section';
import BannerOneSection from '~/components/partials/home/banner-one-section';
import VendorSection from '~/components/partials/home/vendor-section';
import ElectronicCollection from '~/components/partials/home/electronic-collection';
import BannerTwoSection from '~/components/partials/home/banner-two-section';
import ClothingCollection from '~/components/partials/home/clothing-collection';
import BannerThreeSection from '~/components/partials/home/banner-three-section';
import FoodCollection from '~/components/partials/home/food-collection';
import BestCollection from '~/components/partials/home/best-collection';
import NewsletterSection from '~/components/partials/home/newsletter-section';
import BrandSection from '~/components/partials/home/brand-section';
import BlogSection from '~/components/partials/home/blog-section';
import RecentCollection from '~/components/partials/home/recent-collection';
import IntroSectionV2 from "~/components/partials/home/intro-section-v2";
import IntroSectionTopBanner from "~/components/partials/home/intro-section-top-banner";

function HomePage () {

    const bestSelling = productos.bestSelling;
    const productCollection = productos.productCollection;
    const featured = productos.featured;
    const latest = productos.latest;

    return (
        <div className="main home">
            <Helmet>
                <title>Hipertronics eCommerce - Home</title>
            </Helmet>


            <h1 className="d-none">Hipertronics eCommerce - Home</h1>

            <div className="page-content">
                <div className="intro-section">
                    <div className="container">
                        <IntroSectionTopBanner />

                        <IntroSection />

                        <ServiceBox />
                    </div>
                </div>

                <DealCollection products={ latest } loading={false} />

                <CategorySection />


                <BannerOneSection />

                <NewsletterSection />

                {/*<VendorSection />*/}

                {/*<ElectronicCollection products={ electronics } loading={ loading } />*/}

                {/*<BannerTwoSection />*/}

                {/*<ClothingCollection products={ clothings } loading={ loading } />*/}

                {/*<BannerThreeSection />*/}

                {/*<FoodCollection products={ foods } loading={ loading } />*/}

                <BestCollection products={ bestSelling } loading={false} />



                <BrandSection />
                <div className="intro-section">
                    <div className="container">
                        <IntroSectionV2 />

                        
                    </div>
                </div>

                {/*<BlogSection posts={ posts } />*/}

                {/*<RecentCollection products={ latest } loading={ loading } />*/}
            </div>

            <NewsletterModal />
        </div>
    )
}

export default ( HomePage );