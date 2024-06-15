import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function About() {
    return (<>
        <div className="my-5"><h1 className="aboutMe">About Me</h1></div>
        <Container>
            <Row>
                <Col className="text-start ps-5"  lg={4}>
                    <div className="mb-4 ps-5"><span className="leftText">Full Name :</span>
                        <span className="rightText ms-4">Ranjna Devi</span>
                    </div>
                    <div className="mb-4 ps-5"><span className="leftText">Phone :</span>
                        <span className="rightText ms-4 ps-4">8427185225</span>
                    </div>
                    <div className="mb-4 ps-5"><span className="leftText">Website :</span>
                        <span className="rightText ms-4 ps-2">www.yoursite.com</span>
                    </div>
                    <div className="mb-4 ps-5"><span className="leftText">Address :</span>
                        <span className="rightText ms-4">1580,phase 5,<br></br>Mohali(Punjab)</span>
                    </div>
                </Col>
                <Col className="text-lg-start text-center"  lg={8}>
                    <div className=""><h1 className="aboutMeText text-lg-start text-center">Hello Everyone !</h1>
                        <p className="textP my-4 text-lg-start text-center">There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.</p>
                        <p className="textP my-4 text-lg-start text-center">Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci there live the blind texts from the countries Vokalia and Consonantia, there live the blind texts. Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.</p>
                    </div>
                    <div className="my-4 text-lg-start text-center">
                    <Link to="https://github.com/dranjna"><FaGithub className="icon-about me-3" /></Link>
                    <Link to="https://www.linkedin.com/in/ranjna-devi-7a69a6137/"><CiLinkedin className="icon-about mr-3" /></Link>
                </div>
                </Col>
            </Row>
        </Container>
    </>)
}
export default About;