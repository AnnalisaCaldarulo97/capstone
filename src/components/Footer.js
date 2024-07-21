function Footer() {
    return (
        <footer className="container py-5">
            <div className="row justify-content-evenly">
                <div className="col-6 col-md-2">
                    <img src="/media/logo3.png" className="logofooter" alt="logo2" />
                </div>
                <div className="ms-5 col-6 col-md-2 pt-5 text-start ">
                    <h5>Doormat Navigation</h5>
                    <ul className="list-unstyled  footer-p">
                        <li className="fli"> <a href="#main" className="nav-link">Home</a> </li>
                        <li className="fli"> <a href="#about" className="nav-link">About</a> </li>
                        <li className="fli"> <a href="#main" className="nav-link">Menu</a> </li>
                        <li className="fli"> <a href="#" className="nav-link">Reservations</a> </li>
                        <li className="fli"> <a href="#" className="nav-link">Order online</a> </li>
                        <li className="fli"> <a href="#reviews" className="nav-link">Reviews</a> </li>
                    </ul>
                </div>
                <div className="ms-5 col-6 col-md-2 pt-5 text-start">
                    <h5>Contacts</h5>

                    <ul className="list-unstyled  footer-p">
                        <li className="fli"> <a className="nav-link" href="#"> Address </a></li>
                        <li className="fli"> <a className="nav-link" href="#"> Phone number</a> </li>
                        <li className="fli"> <a className="nav-link" href="#"> email </a></li>
                    </ul>
                </div>
                <div className="ms-5 col-6 col-md-2 pt-5 text-start">
                    <h5>Social Media Links</h5>
                    <ul className="list-unstyled  footer-p">
                        <li className="fli"> <a className="nav-link" href="#"> Address </a></li>
                        <li className="fli"> <a className="nav-link" href="#"> Phone </a> </li>
                        <li className="fli"> <a className="nav-link" href="#"> email </a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;