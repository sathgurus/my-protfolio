import { Card, Col, Image, Row } from 'react-bootstrap'
import profilePicture from '../../../assets/images/IMG_20230612_211530_578-photoaidcom-cropped.jpg'
import { Typed } from 'react-typed'
import { Typewriter } from 'react-simple-typewriter'
import AboutMe from './AboutMe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGit, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SocialIcons from './fields/SocialIcons'


const ProfilePicture = () => {
    return (
        <>
            <Row className="slide-in">
                <Col lg={8}>
                    <Col lg={12}>
                        <h1 style={{
                            //  background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
                            WebkitBackgroundClip: 'text',  // This makes the background apply to text
                            color: 'white',          // Makes the text color transparent so the gradient shows
                            fontSize: '50px',
                            //fontFamily: 'sans-serif',
                            fontWeight: 'bold',
                        }}>
                            <Typewriter
                                words={[
                                    "I'm Sathgurunathan",
                                    "I'm a MERN Stack Developer",
                                ]}
                                loop={0} // Infinite loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                textStyle={{
                                    color: "",
                                    fontSize: "50px",
                                    //fontFamily: "sans-serif",
                                }}
                            />
                        </h1>
                    </Col>
                    <Col className='mt-5' lg={12}>
                        <AboutMe />
                    </Col>
                    <Col className='mt-3 mb-5' lg={12}>
                        <SocialIcons />
                    </Col>
                </Col>
                <Col lg={1}></Col>
                <Col lg={3} className='d-flex justify-content-center'>
                    <Image src={profilePicture} height={250} className="profile-image" />
                </Col>

            </Row>
            {/* <Row className="mb-3">
               
            </Row>*/}
        </>
    )
}

export default ProfilePicture