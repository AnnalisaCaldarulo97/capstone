import BookingForm from "./BookingForm";
import { useState } from 'react';

function BookingPage() {
    const [formData, setFormData] = useState({
        resDate: '',
        resTime: '',
        guests: '',
        occasion: '',
    });

    const updateFormData = (newData) => {
        setFormData({ ...formData, ...newData });
    };

    return (
        <div className="container-fluid container-booking">
            <div className="row justify-content-center">
                <div className="col-12 col-md-5">
                    <img src="/media/restaurant.webp" className="img-fluid" alt="restaurant" />
                </div>
                <div className="col-12 col-md-5 d-flex align-items-center">
                    <BookingForm formData={formData} updateFormData={updateFormData} />
                </div>
            </div>
        </div>
    )
}

export default BookingPage;