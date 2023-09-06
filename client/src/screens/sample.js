import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import axios from 'axios';
import 'antd/dist/reset.css';
import '../styles/CustomCalendar.css'; // Import your custom CSS for styling

function CustomCalendar() {
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        // Fetch booking data from your API endpoint
        axios.get('/api/bookings/getallbookingrooms')
            .then(response => {
                const fetchedData = response.data;
                console.log('Fetched Booking Data:', fetchedData); // Print the data to the console
                setBookingData(fetchedData);
            })
            .catch(error => {
                console.error('Error fetching booking data:', error);
            });
    }, []);

    const calculateColor = (percentage) => {
        if (percentage >= 0.7) {
            return 'yellow';
        } else if (percentage >= 0.5) {
            return 'green';
        } else {
            return 'red';
        }
    };

    const renderDateCell = (current) => {
        const dateString = current.format('YYYY-MM-DD'); // Convert moment date to string
        const booking = bookingData.find(booking => booking.date === dateString);
        

        if (booking) {
            const percentage = booking.booked / booking.capacity;
            const color = calculateColor(percentage);
            return (
                <div className={`custom-date-cell ${color}`}>
                    {current.date()}
                </div>
            );
        }

        return current.date();
    };

    const bookingDataLength = bookingData.length; // Calculate the length

    return (
        <div className="custom-calendar">
            <p>Booking Data Length: {bookingDataLength}</p>
            <DatePicker dateRender={renderDateCell} />
        </div>
    );
}

export default CustomCalendar;
