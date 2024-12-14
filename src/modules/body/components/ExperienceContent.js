import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";



const ExperienceContent = () => {
    const [isExpandedApp, setIsExpandedApp] = useState(false);
    const [isExpandedWeb, setIsExpandedWeb] = useState(false);
    const [isExpandedDesign, setIsExpandedDesign] = useState(false);

    const handleToggle = () => {
        setIsExpandedApp(!isExpandedApp);
    };
    const handleToggleWeb = () => {
        setIsExpandedWeb(!isExpandedWeb);
    };
    const handleToggleDesign = () => {
        setIsExpandedDesign(!isExpandedDesign);
    };
    return (

        <>

            <Row className="mt-2">
                <Col lg={6}>
                    <Card className="card-zoom shadow-lg" style={{ backgroundColor: '#3a4664', color: 'white' }}>
                        <Card.Body>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <FontAwesomeIcon icon={faCode} style={{ fontSize: '35px' }} />
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg={12} className="d-flex justify-content-center">
                                    <h3 style={{ fontWeight: 600, textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>Web Development</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Form.Label style={{ textAlign: 'start' }}>
                                        Developed dynamic, responsive web applications with React.js, ensuring fast load times and seamless user experience across devices and browsers.
                                        Built robust RESTful APIs using Node.js and Express.js for smooth communication between frontend and server.
                                        Integrated databases (MongoDB and MySQL) to store and manage user data, ensuring consistency and scalability.
                                        {isExpandedWeb &&
                                            <>Utilized Git for version control and collaborated with team members via GitHub to maintain code organization and prevent conflicts.
                                                Optimized web performance using techniques like lazy loading, code splitting, and caching to improve page speed and reduce server load.
                                                Implemented state management with Redux Toolkit and Context API for efficient data handling across components.
                                                Ensured cross-browser compatibility, integrated third-party APIs, and optimized SEO for better visibility and user experience.</>}
                                    </Form.Label>


                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Button onClick={handleToggleWeb} className="custom-button">
                                        {isExpandedWeb ? 'Read Less' : 'Read More'}
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                {/* <Col lg={4} >
                    <Card className="card-zoom shadow-lg" style={{ backgroundColor: '#3a4664', color: 'white' }}>
                        <Card.Body>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <FontAwesomeIcon icon={faPalette} style={{ fontSize: '35px' }} />
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg={12} className="d-flex justify-content-center">
                                    <h3>UI Designing</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <ul>
                                        <li> Emphasize designing user-friendly, accessible, and intuitive interfaces.</li>
                                        <li> Built backend RESTful APIs with Node.js and Express.js to handle server-side logic and database
                                            interactions.</li>
                                        {isExpandedDesign &&
                                            <>
                                                <li>Collaborated with the team to manage MongoDB and MySQL databases for application data storage.</li>
                                                <li>Integrated state management using Redux Toolkit for efficient data handling in complex UIs.</li>
                                            </>}
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Button onClick={handleToggleDesign} variant="link">
                                        {isExpandedDesign ? 'Read Less' : 'Read More'}
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col> */}
                <Col lg={6}>
                    <Card className="card-zoom shadow-lg" style={{ backgroundColor: '#3a4664', color: 'white' }}>
                        <Card.Body>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <FontAwesomeIcon icon={faAndroid} style={{ fontSize: '35px' }} />
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg={12} className="d-flex justify-content-center">
                                    <h3 style={{ fontWeight: 600, textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>App Development</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Form.Label style={{ textAlign: 'start' }}>
                                        Developed cross-platform mobile apps using Flutter and Dart for both Android and iOS, leveraging a single codebase for high performance and efficiency.
                                        Created responsive UIs with Flutter's widgets, adapting to various screen sizes and ensuring seamless experiences across devices.
                                        Integrated APIs (RESTful, Firebase) and third-party services like payment gateways to extend app.
                                        {isExpandedApp && <>
                                            Implemented custom UI components and animations, ensuring smooth interactions with features like Hero transitions and Tween animations.
                                            Optimized app performance using Flutter DevTools and Dart DevTools.
                                            Conducted unit and widget tests to ensure stability, following best practices for high-quality app development.
                                            Collaborated with cross-functional teams, using tools like Jira, and integrated analytics for tracking user engagement and app optimization.
                                        </>}
                                    </Form.Label>


                                </Col>
                            </Row>

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Button onClick={handleToggle} className="custom-button">
                                        {isExpandedApp ? 'Read Less' : 'Read More'}
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ExperienceContent;