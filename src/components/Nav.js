function Nav() {
    return (
        <nav className="ps-custom container">
            <div className="row align-items-center py-3 justify-content-around">
                <div className="col-12 col-md-6 me-auto text-start">
                    <a className="navbar-brand ">
                        <img src="/media/logo_nav.png" alt="logo" className="d-inline-block align-text-top" width='220px' />
                    </a>
                </div>
                <ul className="col-12 col-md-5 d-flex justify-content-around  list-unstyled pt-3 text-font">
                    <li className="nav-item"> <a href="#main" className="nav-link">Home</a> </li>
                    <li className="nav-item"> <a href="#about" className="nav-link">About</a> </li>
                    <li className="nav-item"> <a href="#main" className="nav-link">Menu</a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link">Reservations</a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link">Order online</a> </li>
                    <li className="nav-item"> <a href="#reviews" className="nav-link">Reviews</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
