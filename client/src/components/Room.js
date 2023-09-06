import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Room.css';

const Room = ({ room, checkInDate, checkOutDate }) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='row bs'>
      <div className='col-md-4'>
        <img src={room.imgUrl[0]} className='smallImg' alt='' />
      </div>
      <div className='col-md-7'>
        <h1>{room.name}</h1>
        <b>
          <p>Max Count: {room.maxCount}</p>
          <p>Type: {room.type}</p>
        </b>
        <div style={{ float: 'right' }}>
          {/* Link to the booking screen */}
          {checkInDate && checkOutDate && (
            <Link to={`/book/${room._id}/${checkInDate}/${checkOutDate}`}>
              <button className='btn btn-primary m-2'>BOOK NOW</button>
            </Link>
          )}
          {/* Button to show room details modal */}
          <button className='btn btn-primary' onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      {/* Modal for displaying room details */}
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imgUrl.map((url, index) => (
              <Carousel.Item key={index}>
                <img className='d-block w-100 bigImg' src={url} alt='' />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;
