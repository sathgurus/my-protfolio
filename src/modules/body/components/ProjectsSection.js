import { Col, Form } from "react-bootstrap";



const ProjectSection = () => {
    return (
        <>
            <Col lg={12} className="mt-2" >
                <Form.Label style={{ color: 'black', fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid gray' }}>
                    <h1>Projects</h1>
                </Form.Label>
            </Col>

            <Col lg={12}>
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
            </Col>

        </>
    )
}

export default ProjectSection;