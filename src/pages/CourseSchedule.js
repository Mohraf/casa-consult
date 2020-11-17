import React from 'react';
import NavBar from '../components/Navbar';
import '../App.css';
import {Table} from 'react-bootstrap';

export default function Services() {
  return (
    <div>
      <NavBar/>
      <div className='courses'>
        <div className='content'>
        <h1 className='lead'>COURSE SCHEDULE</h1>

        <Table stripped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Day</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Monday</td>
              <td>8am to 4pm</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Tuesday</td>
              <td>8am to 4pm</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Wednesday</td>
              <td>8am to 4pm</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Thursday</td>
              <td>8am to 4pm</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Friday</td>
              <td>8am to 4pm</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Saturday</td>
              <td>8am to 4pm</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Sunday</td>
              <td>No Classes</td>
            </tr>
          </tbody>
        </Table>
        </div>
      </div>
    </div>
    
  );
}
