import React from 'react';
import '../App.css';
import NavBar from '../components/Navbar';
import {ListGroup} from 'react-bootstrap';

export default function Policies() {
  return  (
    <div>
      <NavBar/>
      <div className="courses">
        <div className='content'>
          <h1 className='lead'>POLICIES</h1>
          <h2>Refund Policy</h2>
          <h4>We offers refunds for the following: </h4>

        
          <ListGroup as='ol'>
            <ListGroup.Item as='li'>
              If you decide after the first day of the Learn2Ride practice riding exercises that riding a motorcycle is not for you, we will refund you 75%. We do not want you to lose all your money if riding a motorcycle is not for you.
            </ListGroup.Item>
            

            <ListGroup.Item as='li'>
              If you are dismissed from a class for being late or for not having all the proper riding gear as outlined on each course webpage, there is no refund (you forfeit all your money) and you will have to pay the full course price to attend another class. No exceptions.
            </ListGroup.Item>
            

            <ListGroup.Item as='li'>
              If you drop out of a class that is already in session or do not show up for a class or a segment of the class for whatever reason, there is no refund (you forfeit all your money) and you will have to pay the full course price to attend another class. No exceptions.
            </ListGroup.Item>
            

            <ListGroup.Item as='li'>
              If we have to cancel a class or a segment of the class, we will either refund all your money, put you in another class for free or offer a make-up class segment for free.
            </ListGroup.Item>
            

            <ListGroup.Item as='li'>
              If you are counseled out of the Learn2Ride course on the first day of the practice riding exercises, we will refund you 75% 
            </ListGroup.Item>
            
          </ListGroup>
        </div>
        
        
      </div>
    </div>
  );
}
