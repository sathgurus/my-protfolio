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
        <Nav className="ms-auto d-flex justify-content-end w-100 " style={{ cursor: 'pointer', gap: '20px', }}>
          <Link to="about" smooth={true} offset={-70} duration={500}>About</Link>
          <Link to="experience" smooth={true} offset={-70} duration={500}>Experience</Link>
          <Link to="project" smooth={true} offset={-70} duration={500}>Projects</Link>
          <Link to="skills" smooth={true} offset={-70} duration={500}>Skills</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
