import BookingForm from "./BookingForm";

function BookingPage() {
    return (
        <div className="container-fluid container-booking">
            <div className="row justify-content-center">
                <div className="col-12 col-md-5">
                    <img src="/media/restaurant.webp" className="img-fluid" alt="restaurant" />
                </div>
                <div className="col-12 col-md-5 d-flex align-items-center">
                    <BookingForm />
                </div>
            </div>
        </div>
    )
}

export default BookingPage;