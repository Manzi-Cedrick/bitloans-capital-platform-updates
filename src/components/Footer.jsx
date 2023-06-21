import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer className="text-center text-white bg-primary">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="https://web.facebook.com/profile.php?id=100093215115161" className="me-4 text-reset">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/Bitloanscapital" className="me-4 text-reset">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.pinterest.com/BitloansCapital/" className="me-4 text-reset">
                            <i className="fa fa-pinterest"></i>
                        </a>
                        <a href="https://www.instagram.com/bitloanscapital/" className="me-4 text-reset">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/bitloans-capital-627121279/" className="me-4 text-reset">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="https://www.reddit.com/user/BitloansCapital" className="me-4 text-reset">
                            <i className="fa fa-reddit"></i>
                        </a>
                        <a href="https://join.skype.com/invite/CKOdCbBYl2tj" className="me-4 text-reset">
                            <i className="fa fa-skype"></i>
                        </a>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fa fa-gem me-3"></i>Bitloanscapital
                                </h6>
                                <p></p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Pages
                                </h6>
                                <p>
                                    <a href="/" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="/about" className="text-reset">About Us</a>
                                </p>
                                <p>
                                    <a href="/contact" className="text-reset">Contact</a>
                                </p>
                                <p>
                                    <a href="/borrow" className="text-reset">Borrowing</a>
                                </p>
                                <p>
                                    <a href="/lend" className="text-reset">Lending</a>
                                </p>
                                <p>
                                    <a href="/team" className="text-reset">Teams</a>
                                </p>
                                <p>
                                    <a href="/career" className="text-reset">Career</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="/how" className="text-reset">How it Works</a>
                                </p>
                                <p>
                                    <a href="/faq" className="text-reset">FAQ</a>
                                </p>
                                <p>
                                    <a href="/policy" className="text-reset">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="/terms" className="text-reset">Terms of Service</a>
                                </p>
                                <p>
                                    <a href="/admin" className="text-reset">Admin</a>
                                </p>
                                <p>
                                    <a href="/client" className="text-reset">Client</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p>
                                    <i className="fa fa-home me-3"></i> 161 Shedden Rd, George Town 1105, Cayman Islands
                                </p>
                                <p>
                                    <i className="fa fa-envelope me-3"></i> support@bitloanscapital.com
                                </p>
                                <p>
                                    <i className="fa fa-phone me-3"></i> +1 (928) 328-8764
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4">
                    © 2023 Bitloanscapital. All rights reserved.
                    <a className="text-reset fw-bold" href="https://bitloanscapital.com/">Bitloanscapital</a>
                </div>
            </footer>
        </div>
    );
}
