import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
    return (
        <>
            <div className="my-5">
                <h1 className="aboutMe">Skills</h1>
            </div>
            <div className="background-skill ms-lg-0 ms-5">
            <Container styles={{background:"bisque"}}>
                <Row>
                    <Col lg={3} md={6} className="">
                        <div className="circularProgress">
                            <CircularProgressbar
                                value={90}
                                text={
                                    <>
                                        <tspan x="50" dy="-10">{`HTML`}</tspan>
                                        <tspan x="50" dy="1.2em">{`90%`}</tspan>
                                    </>
                                }
                                styles={getStyle(95)}
                            />
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                        <div className="circularProgress">
                            <CircularProgressbar
                                value={90}
                                text={
                                    <>
                                        <tspan x="50" dy="-10">{`CSS`}</tspan>
                                        <tspan x="50" dy="1.2em">{`90%`}</tspan>
                                    </>
                                }
                                styles={getStyle(50)}
                            />
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                        <div className="circularProgress">
                            <CircularProgressbar
                                value={60}
                                text={
                                    <>
                                        <tspan x="50" dy="-10">{`JS`}</tspan>
                                        <tspan x="50" dy="1.2em">{`60%`}</tspan>
                                    </>
                                }
                                styles={getStyle(70)}
                            />
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                        <div className="circularProgress">
                            <CircularProgressbar
                                value={50}
                                text={
                                    <>
                                        <tspan x="50" dy="-10">{`React`}</tspan>
                                        <tspan x="50" dy="1.2em">{`50%`}</tspan>
                                    </>
                                }
                                styles={getStyle(90)}
                            />
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                        <div className="circularProgress">
                            <CircularProgressbar
                                value={85}
                                text={
                                    <>
                                        <tspan x="50" dy="-10">{`Bootstrap`}</tspan>
                                        <tspan x="50" dy="1.2em">{`85%`}</tspan>
                                    </>
                                }
                                styles={getStyle(90)}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
}

const getStyle = (percentage) => ({
    path: {
        stroke: `rgba(246, 154, 34, ${percentage / 100})`,
        transition: 'stroke-dashoffset 0.5s ease 0s',
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
        strokeWidth: 2,
    },
    trail: {
        stroke: '#d6d6d6',
        strokeLinecap: 'butt',
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
        strokeWidth: 2,
    },
    text: {
        fill: '#000',
        fontSize: '12px',
        fontFamily:'spacemonoRegular'
    },
});

export default Skills;
