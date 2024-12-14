import { Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import ecommerce from '../../assets/images/18Sep24 Free Upload.png'
import billplus from '../../assets/images/app-icon-3.png'
import html from '../../assets/images/html-5_5968267.png'
import css from '../../assets/images/css_919826.png'
import js from '../../assets/images/js_5968292.png'
import bootstrap from '../../assets/images/skill-logo/bootstrap.png'
import dart from '../../assets/images/skill-logo/dart.png'
import gitlab from '../../assets/images/skill-logo/git.png'
import mongo from '../../assets/images/skill-logo/mongo.png'
import mysql from '../../assets/images/skill-logo/mysql.png'
import psql from '../../assets/images/skill-logo/pgsql.png'
import sql from '../../assets/images/skill-logo/sql.png'
import flutter from '../../assets/images/skill-logo/flutter.png'
import reactjs from '../../assets/images/skill-logo/reactjs.png'
import nodejs from '../../assets/images/skill-logo/nodejs.png'
import expressjs from '../../assets/images/skill-logo/expressjs.png'
import java from '../../assets/images/skill-logo/java.png'
import github from '../../assets/images/skill-logo/github.png'
import portfolio from '../../assets/images/Screenshot from 2024-12-07 19-18-51.png'


const Skills = () => {
    return (
        <>
            <Col lg={12} className="mb-5">
                <Card className="mt-3" >
                    <Card.Body style={{ background: '' }}>
                        <Row className="mb-3">

                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={html} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={css} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={bootstrap} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={js} height={70} />
                            </Col>

                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={mongo} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={expressjs} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={reactjs} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={nodejs} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={java} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={flutter} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={dart} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 d-flex justify-content-center align-item-center">
                                <Image src={sql} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 mb-3 d-flex justify-content-center align-item-center">
                                <Image src={mysql} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 mb-3 d-flex justify-content-center align-item-center">
                                <Image src={psql} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 mb-3 d-flex justify-content-center align-item-center">
                                <Image src={gitlab} height={70} />
                            </Col>
                            <Col lg={3} className="mt-5 mb-3 d-flex justify-content-center align-item-center">
                                <Image src={github} height={70} />
                            </Col>


                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Skills;