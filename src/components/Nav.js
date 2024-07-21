function Nav() {
    return (
        <nav>
            <div className="container d-flex align-items-center py-3 justify-content-around">
                <a className="navbar-brand me-auto">
                    <img src="/media/logo_nav.png" alt="logo" className="d-inline-block align-text-top" width='220px' />
                </a>
                <ul className="d-flex justify-content-around  list-unstyled pt-3 w-75 text-font">
                    <li className="nav-item"> <a href="#" className="nav-link">Home</a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link">About</a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link">Menu</a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link">Reservations</a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link">Order online</a> </li>
                    <li className="nav-item"> <a href="#" className="nav-link">Login</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
