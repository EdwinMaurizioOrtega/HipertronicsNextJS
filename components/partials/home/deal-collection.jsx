import React from 'react';

import ALink from '~/components/features/custom-link';

import ProductSm from '~/components/features/product/product-sm';

import ProductDeal from '~/components/partials/home/product-deal';

function BestCollection ( props ) {
    const { products, loading } = props;

    return (
        <section className="product-deals-wrapper mb-10 pb-6">
            <div className="container">
                <h2 className="title title-line title-underline with-link">
                    Ofertas del día
                    <ALink href="shop/?category=celulares" className=" text-capitalize font-weight-semi-bold btn-more">
                        Más productos<i className="d-icon-arrow-right"></i>
                    </ALink>
                </h2>

                <div className="row grid-type">
                    <div className="product-single-wrap">
                        {
                            loading ?
                                <div className="product-loading-overlay" key="deal-skel"></div>
                                : products && <ProductDeal adClass="h-100" product={ products[ 4 ] } />
                        }
                    </div>
                    {
                        loading ?
                            [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( item => (
                                <div className="product-loading-overlay" key={ 'deal-skel-' + item }></div>
                            ) )
                            : (
                                products && products.filter( ( item, index ) => index !== 4 ).map( ( item, index ) => (
                                    <ProductSm
                                        product={ item }
                                        isStockCount={ true }
                                        key={ `deal-product ${ index }` }
                                    />
                                ) )
                            )
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo( BestCollection );
