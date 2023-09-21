import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <ALink href="market1.html" className="logo-footer">
                                <img src="images/home/footer-logo.png" alt="logo-footer" width="153"
                                    height="44" />
                            </ALink>

                        </div>
                        <div className="col-lg-4 widget-newsletter mb-4 mb-lg-0">
                            <h4 className="widget-title ls-m">Ofertas especiales y ahorros</h4>
                            <p>Obtenga toda la información sobre descuentos, ventas y ofertas.</p>
                        </div>
                    </div>
                </div>

                <div className="footer-middle" >
                    <div className="row">
                    <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h4 className="widget-title">NOSOTROS</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="/pages/about-us">Sobre nosotros</ALink>
                                    </li>
                                    
                                    {/* <li>
                                        <ALink href="https://mecompras.ec/wp-content/uploads/2023/09/DEVOLUCIO%CC%81N.pdf">Devoluciones</ALink>
                                    </li> */}
                                    <li>
                                        <ALink href="https://mecompras.ec/wp-content/uploads/2023/09/LEY-DE-PROTECCION-DE-DATOS-LIDENAR-S.A.pdf">Términos &amp; Condiciones</ALink>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h4 className="widget-title">CUSTOMER SERVICE</h4>
                                <ul className="widget-body">
                                    <li>
                                        <ALink href="https://bitecu.com/">Servicio técnico</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Política de Garantia</ALink>
                                    </li>
                                    
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-info">
                                <h4 className="widget-title">DATOS DE CONTACTO</h4>
                                <ul className="widget-body">
                                    <li>
                                        <label>Teléfono: </label>
                                        <ALink href="tel:093 999 1111">093 999 1111</ALink>
                                    </li>
                                    <li>
                                        <label>Correo: </label>
                                        <ALink href="mailto:ventasdigitales@hipertronics.us">ventasdigitales@hipertronics.us</ALink>
                                    </li>
                                    <li>
                                        <label>Dirección: </label>
                                        <ALink href="#">Padre Aguirre 9-68, Cuenca, Ecuador</ALink>
                                    </li>
                                    
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-instagram pl-lg-10 mb-0 mb-md-6">
                                <h4 className="widget-title">REDES SOCIALES</h4>
                                <figure className="widget-body row">
                                    <div className="col-3">
                                        <ALink href="https://es-la.facebook.com/hipertronics/">
                                        <LazyLoadImage
                                            src="images/instagram/01.jpg"
                                            alt="instagram 1"
                                            width="64"
                                            height="64"
                                        />
                                        </ALink>
                                    </div>
                                    <div className="col-3">
                                        <ALink href="https://www.instagram.com/hipertronics/?hl=es">
                                        <LazyLoadImage
                                            src="images/instagram/03.jpg"
                                            alt="instagram 3"
                                            width="64"
                                            height="64"
                                        />
                                        </ALink>
                                    </div>
                                    <div className="col-3">
                                        <ALink href="https://www.linkedin.com/company/hipertronics/?originalSubdomain=ec">
                                        <LazyLoadImage
                                            src="images/instagram/04.jpg"
                                            alt="instagram 4"
                                            width="64"
                                            height="64"
                                        />
                                        
                                        </ALink>
                                    </div>
                                    
                                  
                                    <li>
                                    
                                        <label>HORARIOS DE ATENCIÓN</label>
                                        
                                    </li>
                                    <li>
                                        <ALink href="#">Lunes a Viernes / 10:00 AM - 19:00 PM</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Sábados / 10:00 AM - 18:00 PM</ALink>
                                    </li>
                                </figure>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="footer-bottom">
                    <div className="footer-left">
                        <figure className="payment">
                            <img src="images/payment.png" alt="payment" width="159" height="29" />
                        </figure>
                    </div>
                    <div className="footer-center">
                        <p className="copyright">Lidenar S.A eCommerce &copy; 2022. Built with love by LIDENAR S.A.</p>
                    </div>
                    <div className="footer-right">
                        <div className="social-links">
                            <ALink target="_blank" href="https://www.facebook.com/hipertronics" className="social-link social-facebook fab fa-facebook-f"></ALink>
                            {/*<ALink href="#" className="social-link social-twitter fab fa-twitter"></ALink>*/}
                            {/*<ALink href="#" className="social-link social-linkedin fab fa-linkedin-in"></ALink>*/}
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}