import React from 'react';
// import '../App.css';
import NavBar from '../components/Navbar';
import {Container} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Courses() {
  return (
    <div>
      <NavBar/>
      <Container>
        <h1 className='lead'>COURSES</h1>

      </Container>
    </div>
    
  );
}
