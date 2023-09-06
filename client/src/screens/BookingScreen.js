import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import '../styles/Room.css';
import moment from 'moment';

const BookingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState(null);

    
    const { roomid, checkInDate, checkOutDate } = useParams();
    // Convert the date strings to moment objects
    const momentCheckInDate = moment(checkInDate, 'DD-MM-YYYY');
    const momentCheckOutDate = moment(checkOutDate, 'DD-MM-YYYY');
    
    // console.log('mom',momentCheckInDate)

    // Calculate the difference in days
    const totalDays = moment.duration(momentCheckOutDate.diff(momentCheckInDate)).days() + 1;
    const totalamount = room ? totalDays * room.rentperday : 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.post('/api/rooms/getroombyid', { roomid });
                const data = response.data;
                setRoom(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [roomid]);

    async function bookRoom() {
        const bookingDetails = {
            room,
            userid: JSON.parse(localStorage.getItem('currentUser'))._id,
            checkInDate,
            checkOutDate,
            totalDays,
            totalamount
        };

        try {
            const result = await axios.post('/api/bookings/bookroom', bookingDetails);
            // Optionally, handle successful booking and redirect here
            console.log(result.data); // Log the result for debugging
            alert('Booking successful');
            } catch (error) {
            console.error(error);
            alert('Booking failed. Please try again.');
        }
    }
  return (
    <div>
      <h1>Booking Screen</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error fetching data.</h1>
      ) : (
        <div className='m-5'>
          <div className='row justify-content-center md-5 bs'>
            <div className='col-md-5'>
              <h1>{room.name}</h1>
              <img src={room.imgUrl[0]} className='bigImg' alt='' />
            </div>

            <div className='col-md-5'>
              <div style={{ textAlign: 'right' }}>
                <h1>Booking Details</h1>
                <hr />
                <b>
                  <p>Name: {JSON.parse(localStorage.getItem('currentUser')).name} </p>
                  <p>Check In Date: {checkInDate}</p>
                  <p>Check Out Date: {checkOutDate}</p>
                  <p>Max Count: {room.maxcount}</p>
                </b>
              </div>

              <div style={{ textAlign: 'right' }}>
                <h1>Amount</h1>
                <hr />
                <b>
                  <p>Total Days: {totalDays} </p>
                  <p>Rent Per Day: {room.rentperday}</p>
                  <p>Total Amount: {totalamount} </p>
                </b>
              </div>

              <div style={{ float: 'right' }}>
                <button className='btn btn-primary' onClick={bookRoom}>PAY NOW</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingScreen;
