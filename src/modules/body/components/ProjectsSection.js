import { Card, Col, Form, Image, Row } from "react-bootstrap";
import ecommerce from '../../../assets/images/18Sep24 Free Upload.png'
import portfolio from '../../../assets/images/Screenshot from 2024-12-14 15-33-54.png'
import billplus from '../../../assets/images/app-icon-3.png'



const ProjectSection = () => {
    return (
        <>


            <Row className="mt-2">
                <Col lg={4}  >
                    <Card className="card-zoom shadow-lg" style={{ backgroundColor: '#3a4664', color: 'white' }}>
                        <Card.Body>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Image src={billplus} height={100} />
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg={12} className="d-flex justify-content-center">
                                    <h3 style={{ fontWeight: 600, textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>Bill Plus+</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Form.Label style={{textAlign:'start'}}>
                                        Billing software is essential for businesses looking to manage their invoices, payments, and customer records efficiently. Whether you run a retail store, a service-based business, billing software ensures accuracy, saves time, and customer satisfaction.
                                    </Form.Label>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} >
                    <Card className="card-zoom shadow-lg" style={{ backgroundColor: '#3a4664', color: 'white' }}>
                        <Card.Body>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Image src={ecommerce} height={100} />
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg={12} className="d-flex justify-content-center">
                                    <h3 style={{ fontWeight: 600, textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>E-commerce</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Form.Label style={{textAlign:'start'}}>Build a scalable and dynamic e-commerce platform using React for the front-end and Node.js for the back-end. This project delivers a seamless shopping experience, secure transactions, and efficient management of products, users, and orders.</Form.Label>
                                </Col>
                            </Row>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col lg={4}  >
                    <Card className="card-zoom shadow-lg" style={{ backgroundColor: '#3a4664', color: 'white' }}>

                        <Card.Body>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Image src={portfolio} height={100} />
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg={12} className="d-flex justify-content-center">
                                    <h3 style={{ fontWeight: 600, textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>Portfolio</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="d-flex justify-content-center">
                                    <Form.Label style={{textAlign:'start'}}>
                                        Create a personal portfolio website using React to showcase your skills, projects, and experience in a modern, interactive, and responsive manner. This project is perfect for developers, designers, or anyone looking to create an impressive online presence.
                                    </Form.Label>
                                </Col>
                            </Row>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>

            {/* <Col lg={12}>
                <h5>
                    BillPlus - Billing Software
                </h5>

            </Col>
            <Col lg={12}>

                <ul>
                    <li> The objective of this project is to design and develop an automated billing software
                        solution that streamlines the process of invoice generation, payment tracking, and
                        financial management for businesses. The software aims to provide a user-friendly
                        interface to manage customers, products, taxes, and transactions efficiently, while
                        reducing human errors and improving cash flow visibility. It will offer features such as
                        multi-currency support, recurring billing, automated payment reminders, and real-
                        time reporting to ensure smooth operations and tax compliance.</li>
                    <li> By integrating payment gateways and supporting inventory management, the
                        software will help businesses enhance customer satisfaction and achieve operational
                        efficiency.</li>

                </ul>

            </Col>
            <Col lg={12}>
                <h5> E-commerce Platform (MERN Stack)</h5>

            </Col>
            <Col lg={12}>
                <ul>
                    <li> Designed a responsive e-commerce web application for showcasing and purchasing products.</li>
                    <li> Developed functionalities such as user authentication, product listing, and a shopping cart.</li>
                </ul>
            </Col>
            <Col lg={12}>
                <h5>  Portfolio Website</h5>

            </Col>
            <Col lg={12}>
                <ul>
                    <li> Created a personal portfolio showcasing my skills and projects using React.js, Javascript and Bootstrap.</li>
                    <li> Developed functionalities such as user authentication, product listing, and a shopping cart.</li>
                </ul>
            </Col> */}

        </>
    )
}

export default ProjectSection;