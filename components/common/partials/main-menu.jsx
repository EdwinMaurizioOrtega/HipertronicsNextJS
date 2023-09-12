import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import { mainMenu } from '~/utils/data/menu';

function MainMenu() {
    const pathname = useRouter().pathname;
//BARRA DE HOME,CELULARES,TELEVISORES,TABLETS
    return (
        <nav className="main-nav">
            <ul className="menu">
                <li id="menu-home" className={ pathname === '/' ? 'active' : '' }>
                    <ALink href='/'style={{ color: 'white' }}>Home </ALink>
                </li>

                <li className={ `submenu  ${ pathname.includes( '/shop' ) ? 'active' : '' }` }>
                    {/* 
                    <ALink href='/shop/?category=celulares' style={{ color: 'white' }}>Celulares</ALink>
                    */}
                    <ALink href='#' style={{ color: 'white' }}>Celulares</ALink>

                                <ul>
                                    {
                                        mainMenu.shop.variation1.map( ( item, index ) => (
                                            <li key={ `shop-${ item.title }` }>
                                                <ALink href={ '/' + item.url }>
                                                    { item.title }
                                                    { item.hot ? <span className="tip tip-hot">Hot</span> : "" }
                                                </ALink>
                                            </li>
                                        ) )
                                    }
                                </ul>
                </li>

                <li className={ `submenu  ${ pathname.includes( '/product' ) && !pathname.includes( '/elements' ) ? 'active' : '' }` }>
                    {/* 
                    <ALink href="/shop/?category=tvs" style={{ color: 'white' }}>Televisores</ALink>
                    */}
                    <ALink href="#" style={{ color: 'white' }}>Televisores</ALink>

                                <ul>
                                    {
                                        mainMenu.product.pages.map( ( item, index ) => (
                                            <li key={ `product-${ item.title }` }>
                                                <ALink href={ '/' + item.url }>
                                                    { item.title }
                                                    { item.hot ? <span className="tip tip-hot">Hot</span> : "" }
                                                </ALink>
                                            </li>
                                        ) )
                                    }
                                </ul>
                </li>

                <li className={ `submenu  ${ pathname.includes( '/pages' ) ? 'active' : '' }` }>
                    {/* 
                    <ALink href="/shop/?category=tablets" style={{ color: 'white' }}>Tablets</ALink>
                    */}
                    <ALink href="#" style={{ color: 'white' }}>Tablets</ALink>

                    <ul>
                        {
                            mainMenu.other.map( ( item, index ) => (
                                <li key={ `other-${ item.title }` }>
                                    <ALink href={ '/' + item.url }>
                                        { item.title }
                                        { item.new ? <span className="tip tip-new">New</span> : "" }
                                    </ALink>
                                </li>
                            ) )
                        }
                    </ul>
                </li>

                <li className={ `submenu  ${ pathname.includes( '/blog' ) && !pathname.includes( '/elements' ) ? 'active' : '' }` }>
                    {/* 
                    <ALink href={ `/shop/?category=accesorios` } style={{ color: 'white' }}>Accesorios</ALink>
                    */}
                    <ALink href={ '#' } style={{ color: 'white' }}>Accesorios</ALink>
                    <ul>
                        {
                            mainMenu.blog.map( ( item, index ) => (
                                <li key={ "blog" + item.title } className={ item.subPages ? "submenu" : "" }>
                                    <ALink href={ '/' + item.url }>
                                        { item.title }
                                    </ALink>

                                    {
                                        item.subPages ?
                                            <ul>
                                                {
                                                    item.subPages.map( ( item, index ) => (
                                                        <li key={ `blog-${ item.title }` }>
                                                            <ALink href={ '/' + item.url }>
                                                                { item.title }
                                                            </ALink>
                                                        </li>
                                                    ) )
                                                }
                                            </ul> : ""
                                    }
                                </li>
                            ) )
                        }
                    </ul>
                </li>
                <li>
                    <a href="http://app.hipertronics.us:3030/clientes/" style={{ color: 'white' }}>Sistema</a>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu;