import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {

    const handleContactClick = () => {
        const email = "srisathguru13@gmail.com";
        const body = "Hello Sathgurunathan,";
    
        // Construct the Gmail compose URL
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&body=${encodeURIComponent(body)}`;

    
        // Open Gmail in a new tab
        window.open(gmailURL, "_blank");
      };
    return (
        <>
            <a
                href="https://www.linkedin.com/in/sathgurunathan-s-431430253/"
                target="_blank"
            >
                <FontAwesomeIcon
                    icon={faLinkedin}
                    color="white"
                    className="social-icon"
                />
            </a>

            <a
                href="https://www.instagram.com"
                target="_blank"
                className="social-icon "
            >
                <FontAwesomeIcon
                    icon={faInstagram}
                    className="mx-5 social-icon"
                />
            </a>

            <a
                href="https://www.facebook.com"
                target="_blank"
                className="social-icon"
            >
                <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ fontSize: '25px', transition: 'transform 0.3s, color 0.3s' }}
                    className="social-icon "
                />
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/sathgurus"
                target="_blank"
                style={{ textDecoration: 'none' }}
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    className="mx-5 social-icon"
                    style={{ fontSize: '25px', transition: 'transform 0.3s, color 0.3s' }}
                    color="white"
                />
            </a>
            <div className='mt-3'>
                <Button className='custom-button' onClick={handleContactClick}>Contact</Button>
                <Button className='mx-3 custom-button'>
                <a className=''
                    href="/Sathgurunathan_resume.pdf"
                    download="Sathgurunathan_Resume.pdf"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    Resume
                </a>
                </Button>
            </div>

        </>
    );
};

export default SocialIcons;
