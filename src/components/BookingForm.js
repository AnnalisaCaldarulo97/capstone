import InputGroup from "./fragments/InputGroup";
import { useState, useEffect } from "react";

function BookingForm() {
    const [formData, setFormData] = useState({
        resDate: '',
        resTime: '',
        guests: '',
        occasion: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        // useEffect(() => {
            console.log(formData)
        // })
    }
    const availableTimes = [{ time: '17:00', key: 1 }, { time: '18:00', key: 2 }, { time: '19:00', key: 3 }, { time: '20:00', key: 4 }, { time: '21:00', key: 5 }, { time: '22:00', key: 6 }];


    return (
        <form className="w-100" onSubmit={handleSubmit}>
            <div className="inputContainer mb-3 d-flex flex-column">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="date" value={formData.resDate} onChange={(e) => setFormData({ ...formData, resDate: e.target.value })} />
            </div>
            <div className="inputContainer mb-3 d-flex flex-column">
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="time" value={formData.resTime} onChange={(e) => setFormData({ ...formData, resTime: e.target.value })}>
                    {availableTimes.map((time) => (
                        <option key={time.key} value={time.time}>
                            {time.time}
                        </option>
                    ))}
                </select>
            </div>
            <div className="inputContainer mb-3 d-flex flex-column">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} />
            </div>
            <div className="inputContainer mb-3 d-flex flex-column">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={formData.occasion} onChange={(e) => setFormData({ ...formData, occasion: e.target.value })} defaultValue={'Other'}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
            </div>
            <button type="submit" value="" className="btn btn-dark" >Make Your reservation</button>
        </form>
    )
}

export default BookingForm;