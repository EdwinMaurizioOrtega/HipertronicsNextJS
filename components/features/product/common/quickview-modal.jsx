import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { Magnifier } from 'react-image-magnifiers';
import Modal from 'react-modal';
import imagesLoaded from 'imagesloaded';

import { GET_PRODUCT } from '~/server/queries';
import withApollo from '~/server/apollo';

import OwlCarousel from '~/components/features/owl-carousel';

import DetailOne from '~/components/partials/product/detail/detail-one';

import { modalActions } from '~/store/modal';

import { mainSlider3 } from '~/utils/data/carousel';

const customStyles = {
    content: {
        position: "relative"
    },
    overlay: {
        background: 'rgba(0,0,0,.4)',
        zIndex: '10000',
        overflowX: 'hidden',
        overflowY: 'auto'
    }
}

Modal.setAppElement( '#__next' );

function Quickview( props ) {
    const { slug, closeQuickview, isOpen } = props;

    if ( !isOpen ) return <div></div>;

    const [ loaded, setLoadingState ] = useState( false );

    const { data, loading } = useQuery( GET_PRODUCT, { variables: { slug, onlyData: true } } );
    const product = data && data.product;

    useEffect( () => {
        setTimeout( () => {
            if ( !loading && data && isOpen && document.querySelector( '.quickview-modal' ) )
                imagesLoaded( '.quickview-modal' ).on( 'done', function () {
                    setLoadingState( true );
                    window.jQuery( '.quickview-modal .product-single-carousel' ).trigger( 'refresh.owl.carousel' );
                } ).on( 'progress', function () {
                    setLoadingState( false );
                } );
        }, 200 );
    }, [ data, isOpen ] );

    if ( slug === '' || !product || !product.data ) return '';

    const closeQuick = () => {
        document.querySelector( ".ReactModal__Overlay" ).classList.add( 'removed' );
        document.querySelector( '.quickview-modal' ).classList.add( 'removed' );
        setLoadingState( false )
        setTimeout( () => {
            closeQuickview();
        }, 330 );
    }

    
}

function mapStateToProps( state ) {
    return {
        slug: state.modal.singleSlug,
        isOpen: state.modal.quickview
    }
}

export default withApollo( { ssr: typeof window === 'undefined' } )( connect( mapStateToProps, { closeQuickview: modalActions.closeQuickview } )( Quickview ) );