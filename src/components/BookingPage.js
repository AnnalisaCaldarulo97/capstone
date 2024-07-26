import BookingForm from "./BookingForm";
import { useState } from 'react';

function BookingPage() {
    const [availableTimes, setAvailableTimes] = useState([{ time: '17:00', key: 1 },
    { time: '18:00', key: 2 },
    { time: '19:00', key: 3 },
    { time: '20:00', key: 4 },
    { time: '21:00', key: 5 },
    { time: '22:00', key: 6 },]);

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
                    <BookingForm formData={formData} updateFormData={updateFormData}  />
                </div>
            </div>
        </div>
    )
}

export default BookingPage;