import { Card, Col, Image, Row } from 'react-bootstrap'
import profilePicture from '../../../assets/images/IMG_20230612_211530_578.jpg'
import { Typed } from 'react-typed'
import { Typewriter } from 'react-simple-typewriter'


const ProfilePicture = () => {
    return (
        <>
            {/* <Row>
                <Col lg={6}> <Card className="shadow p-0 mb-5 bg-white rounded ">
                    <Image src={profilePicture} height={250} />
                </Card></Col>
                <Col lg={6}></Col>
            </Row> */}
            <Row className="mb-3">
                <Col lg={12}>
                    <h1 style={{
                        background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
                        WebkitBackgroundClip: 'text',  // This makes the background apply to text
                        color: 'transparent',          // Makes the text color transparent so the gradient shows
                        fontSize: '50px',
                        fontFamily: 'sans-serif',
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
                                color: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
                                fontSize: "50px",
                                fontFamily: "sans-serif",
                            }}
                        />
                    </h1>

                </Col>
                {/* <Col lg={12} className='mt-3'>
                    <h1 style={{ color: 'white', fontSize: '25px', fontFamily: 'cursive', fontWeight: 'bold' }}>Passionate creating great web application and mobile application</h1>
                </Col> */}
            </Row>
        </>
    )
}

export default ProfilePicture