import { Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import coder from '../../assets/images/5044785.png'
import { useState } from 'react';
import { Link } from 'react-scroll';

const MyNavbar = () => {

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      style={{
        backgroundColor: '#1c2841',
        // padding: '10px 20px',
      }}
    >

      <Navbar.Brand href="/">
        <Image src={coder} height={40} alt="Logo" />
      </Navbar.Brand>


      <div className="d-lg-none"
        onClick={handleToggle}
        style={{
          cursor: 'pointer',
          border: '1px solid white',
          padding: '5px 10px',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>☰</span>
      </div>


      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex align-items-center justify-content-end w-100 " style={{ cursor: 'pointer' }}>
          <ul className='mt-2' style={{ display: 'flex', gap: '50px', listStyle: 'none' }}>
            <li><Link to="about" offset={-70}>About</Link></li>
            <li><Link to="experience" offset={-70}>Experience</Link></li>
            <li><Link to="project" offset={-70}>Projects</Link></li>
            <li><Link to="skills" offset={-70}>Skills</Link></li>
            
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
