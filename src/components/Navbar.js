import React from 'react';
import { Link } from 'gatsby';
import './Navbar.css';
import { Nav, Navbar} from 'react-bootstrap';

function NavBar() {
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      {/* <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/logo.jpg" alt="INKED BIKER" className="logo"></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Courses'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Courses
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/CourseSchedule'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Course Schedule
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Policies'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Policies
              </Link>
            </li>

            
          </ul>
        </div>
      </nav> */}

      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img src="images/logo.jpg" alt="INKED BIKER" className="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}

            <Link to='/' className='nav-link' >
                Home
            </Link>

            <Link
                to='/Courses'
                className='nav-link'
            >
              Courses
            </Link>

            <Link
                to='/CourseSchedule'
                className='nav-link'
              >
                Course Schedule
            </Link>

            <Link
                to='/Policies'
                className='nav-link'
              >
                Policies
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
}

export default NavBar;
