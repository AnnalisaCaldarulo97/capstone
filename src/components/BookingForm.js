import InputGroup from "./fragments/InputGroup";
import { useState } from "react";

function BookingForm({ formData, updateFormData }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Submitted form data:', formData);
    };

    const handleChange = (event) => {
        updateFormData({ [event.target.name]: event.target.value });
    };

    const availableTimes = [
        { time: '17:00', key: 1 },
        { time: '18:00', key: 2 },
        { time: '19:00', key: 3 },
        { time: '20:00', key: 4 },
        { time: '21:00', key: 5 },
        { time: '22:00', key: 6 },
    ];


    return (
        <form className="w-100" onSubmit={handleSubmit}>
            <div className="inputContainer mb-3 d-flex flex-column">
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="resDate"
                    value={formData.resDate}
                    onChange={handleChange}
                />
            </div>
            <div className="inputContainer mb-3 d-flex flex-column">
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    name="resTime"
                    value={formData.resTime}
                    onChange={handleChange}
                >
                    {availableTimes.map((time) => (
                        <option key={time.key} value={time.time}>
                            {time.time}
                        </option>
                    ))}
                </select>
            </div>
            <div className="inputContainer mb-3 d-flex flex-column">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleChange} />
            </div>
            <div className="inputContainer mb-3 d-flex flex-column">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
            </div>
            <button type="submit" value="" className="btn btn-dark">
                Make Your reservation
            </button>
        </form>
    )
}

export default BookingForm;