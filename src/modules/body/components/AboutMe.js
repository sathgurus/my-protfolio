import { Col, Form } from "react-bootstrap";



const AboutMe = () => {
    return (
        <>
        {/* <Col lg={12}>
            <Form.Label style={{ color: 'black', fontSize: '16px',  fontWeight: 'bold', borderBottom: '1px solid gray' }}>
                <h1>About Me</h1>
            </Form.Label>
        </Col> */}
            <Col lg={12} className="mt-2">
                <Form.Label style={{ color: 'white', fontSize: '20px',fontWeight:'400'  }}>
                    I am a passionate and results-driven developer with 2 years of experience in MERN stack and Flutter mobile app development. My expertise lies in designing and developing dynamic web and mobile applications that are efficient, user-friendly, and visually appealing. I thrive in collaborative environments and take pride in delivering high-quality, scalable solutions tailored to user needs.
                </Form.Label>
            </Col>
        </>
    )

}

export default AboutMe;