import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Hireme() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (<>
        <div className="my-5">
            <h1 className="aboutMe">Contact Me</h1>
        </div>

        <Row>
            <Col lg={6}>
                <div className="contact-bg mx-lg-0 mx-5">
                    <div className="contact-overlay"></div>
                </div>
            </Col>
            <Col lg={6}>
                <Form onSubmit={handleSubmit} className="mx-5">
                    <div className="my-4">
                        <h1 className="aboutMe text-start">Contact Me</h1>
                    </div>
                    <div className="mb-4 text-start">
                        <div className="Row w-50" style={{ display: 'table' }}>
                            <div Col={6} className="mb-4">
                                <input type="text" placeholder="Your FirstName" />
                            </div>
                            <div Col={6}>
                                <input type="text" placeholder="Your LastName" />
                            </div>
                        </div>

                    </div>

                    <div className="mb-4 text-start"><input type="text" placeholder="Your Email Address" /></div>
                    <div className="mb-4 text-start"><input type="text" placeholder="Your Subject of this message" /></div>
                    <div className="mb-4 text-start"><input type="text" placeholder="Say something about us" /></div>
                    <div className="text-start"><button className="sendbtn p-2">Send Message</button></div>
                </Form>
            </Col>
        </Row>

    </>)

}
export default Hireme