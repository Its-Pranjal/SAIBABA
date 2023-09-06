import express from 'express';
import Room from '../Models/Room.js'; // Import the Room model or schema

const router = express.Router();

// Route to get all rooms
router.get('/getallrooms', async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.send(rooms); // Send the rooms data as the response
  } catch (error) {
    return res.status(400).json({ message: error }); // Return an error response with status 400
  }
});

// Route to get a room by its ID
router.post('/getroombyid', async (req, res) => {
  const roomid = req.body.roomid; // Get the room ID from the request body
  try {
    const room = await Room.findOne({ _id: roomid }); // Find the room with the given ID
    res.send(room); // Send the room data as the response
  } catch (error) {
    return res.status(400).json({ message: error }); // Return an error response with status 400
  }
});

export default router;
