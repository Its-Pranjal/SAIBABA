import express from 'express';
import connectDB from "./db.js";
import roomRoutes from "./Routes/roomRoutes.js";
import userRoute from "./Routes/userRoute.js"
import bookingRoute from "./Routes/bookingsRoutes.js";

const app = express();
connectDB();

app.use(express.json())
app.use('/api/rooms', roomRoutes); 
app.use('/api/users',userRoute);
app.use('/api/bookings',bookingRoute)



const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is runnning on the http://localhost:${port}`));