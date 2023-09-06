import React from 'react';
import Navbar from './components/Navbar';
import Home from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingScreen from './screens/BookingScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import Sample1 from './screens/sample.js'

function App() {
  return (
    <Router>
      <>
        {/* The Navbar component will be displayed on all routes */}
        <Navbar />
        {/* Define the routes using the Routes component */}
        <Routes>
          {/* Define each route with the corresponding path and element */}
          <Route path="/home" element={<Home />} />
          <Route path="/book/:roomid/:checkInDate/:checkOutDate" element={<BookingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/sample" element={<Sample1/>} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
