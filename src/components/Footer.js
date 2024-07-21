function Footer() {
    return (
        <footer className="container-fluid bg-secondary-subtle py-3">
            <div className="row justify-content-center">
                <div className="col-6 col-md-2">
                    <img src="" alt="" />
                </div>
                <div className="col-6 col-md-2">
                    <h5>Doormat Navigation</h5>
                    <ul className="list-unstyled">
                        <li> <a href="#"> Home </a></li>
                        <li> <a href="#"> About </a></li>
                        <li> <a href="#"> Menu </a></li>
                        <li> <a href="#"> Reservations </a></li>
                        <li> <a href="#"> Order online </a> </li>
                        <li> <a href="#"> Login </a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-2">
                    <h5>Contact</h5>

                    <ul  className="list-unstyled">
                        <li> <a href="#"> Address </a></li>
                        <li> <a href="#"> Phone number</a> </li>
                        <li> <a href="#"> email </a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-2">
                    <h5>Social Media Links</h5>
                    <ul  className="list-unstyled">
                        <li> <a href="#"> Address </a></li>
                        <li> <a href="#"> Phone </a> </li>
                        <li> <a href="#"> email </a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;