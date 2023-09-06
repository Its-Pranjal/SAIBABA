import express from 'express';
import roomModel from '../Models/Room.js';
import bookingModel from '../Models/Booking.js';
import moment from 'moment';

const router = express.Router();

router.post('/bookroom', async (req, res) => {
    const {
        room,
        userid,
        checkInDate,
        checkOutDate,
        totalDays,
        totalamount
    } = req.body;

    try {
        // Convert the date strings to moment objects
        const momentCheckInDate = moment(checkInDate, 'DD-MM-YYYY');
        const momentCheckOutDate = moment(checkOutDate, 'DD-MM-YYYY');
        
        const newBooking = new bookingModel({
            room: room.name,
            roomid: room._id,
            userid,
            checkInDate,
            checkOutDate,
            totalDays,
            totalamount,
            transitionId: '123' // Typo: 'transitionId' should be 'transactionId'?
        });

        const booking = await newBooking.save();

        const roomTemp = await roomModel.findOne({ _id: room._id })
        roomTemp.currentBooking.push(
            {
                bookingid: booking._id,
                checkInDate: momentCheckInDate,
                checkOutDate: momentCheckOutDate,
                userid: userid,
                status: booking.status
            });
            await roomTemp.save();
        res.status(201).json({ message: 'Room booked successfully', booking });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Something went wrong in booking the room' });
    }
});

// router.get('/getallbookingrooms', async (req, res) => {
//     try {
//       const rooms = await bookingModel.find({});
//       res.send(rooms); // Send the rooms data as the response
//     } catch (error) {
//       return res.status(400).json({ message: error }); // Return an error response with status 400
//     }
//   });

export default router;
