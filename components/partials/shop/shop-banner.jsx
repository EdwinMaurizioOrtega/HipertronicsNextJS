import ALink from '~/components/features/custom-link';

export default function ShopBanner ( props ) {

    return (
        <div className="shop-boxed-banner banner mb-8 mb-lg-7" style={ { backgroundImage: "url(images/home/banner/shopbanner.jpg)", backgroundColor: "#ECEDEF" } }>
            <div className="banner-content">
                <h4 className="banner-subtitle font-weight-semi-bold ls-m text-uppercase text-secondary mb-3">Por temporada</h4>
                <h1 className="banner-title font-weight-bold ls-m mb-6">Nuestros productos</h1>
                {/* 
                <ALink href="/shop" className="btn btn-dark btn-outline btn-rounded">Tienda<i className="d-icon-arrow-right"></i></ALink>
                */}
            </div>
        </div>
    )
}