function Header() {
    return (
        <header className="py-4 ps-custom">
            <article className="container ">
                <div className="row ">
                    <div className="col-12 col-md-6 text-start">
                        <div className="title-container">
                            <h1 className="title title-font yellow">Little Lemon</h1>
                            <h2 className="subtitle title-font light">Chicago</h2>
                        </div>
                        <p className="text-font light description ">We are a family owned <br></br> Mediterranean restaurant,  <br></br>focused on traditional  <br></br> recipes served with a modern <br></br> twist</p>
                        <div className="btn-container d-flex flex-column justify-content-end ">
                            <a href="#" className="btn-yellow">Reserve a Table</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center header-img">
                        <img src="../media/restauranfood.webp" className="header-img " alt="restaurant food" />
                    </div>
                </div>
            </article>
        </header>
    )
}

export default Header;