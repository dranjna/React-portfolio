import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLink } from "react-icons/ci";

function Portfolio() {
    return (<>
        <div className=""><h1 className="aboutMe mt-5">Work</h1></div>

        <section className="wrapper-full tab-container effectTab-header" id="style_2">
            <div className="wrapper tab-item">
                <div className="custom-row">

                    <div className="column-12 column-sm-12 tab">
                        <div className="custom-row">
                            <div className="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
                                <div className="effect effect-two">
                                    <img src="/images/stulink.svg" className="img-fluid" style={{ height: "295px" }} />
                                    <div className="tab-text">
                                        <h2>StuLink</h2>
                                        <p className="icon-links " >
                                            <Link to="https://stulink.com/"><CiLink
                                                className="icon me-3 mt-0" /></Link></p>
                                        {/* <p className="description">Replace the dummy text with your image description</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
                                <div className="effect effect-two">
                                    <img src="/images/vex.jpeg" className="img-fluid" style={{ height: "295px" }} />
                                    <div className="tab-text">
                                        <h2>Vex Fitness</h2>
                                        <p className="icon-links " >
                                            <Link to="https://app.vex-fitness.com/"><CiLink
                                                className="icon me-3 mt-0" /></Link></p>
                                        {/* <p className="description">Replace the dummy text with your image description</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
                                <div className="effect effect-two">
                                    <img src="/images/landmark.png" className="img-fluid" style={{ height: "295px" }} />
                                    <div className="tab-text">
                                        <h2>LandMark</h2>
                                        <p className="icon-links " >
                                            <Link to="https://ranjnadoors.github.io/LandMark/index.html"><FaGithub classNameName="icon me-3 mt-0" /></Link></p>
                                        {/* <p className="description">Replace the dummy text with your image description</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
                                <div className="effect effect-two">
                                    <img src="/images/stylegrid.jpeg" className="img-fluid w-100" style={{ height: "295px" }} />
                                    <div className="tab-text">
                                        <h2>StyleGrid</h2>
                                        <p className="icon-links " >
                                            <Link to="https://stylegrid.com/"><FaGithub classNameName="icon me-3 mt-0" /></Link></p>
                                        {/* <p className="description">Replace the dummy text with your image description</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
                                <div className="effect effect-two">
                                    <img src="/images/gsap.webp" className="img-fluid w-100" style={{ height: "295px" }} />
                                    <div className="tab-text">
                                        <h2>Gsap Demo</h2>
                                        <p className="icon-links " >
                                            <Link to="https://dranjna.github.io/Gsap_demo/"><FaGithub classNameName="icon me-3 mt-0" /></Link></p>
                                        {/* <p className="description">Replace the dummy text with your image description</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
                                <div className="effect effect-two">
                                    <img src="/images/trickster.jpeg" className="img-fluid w-100" style={{ height: "295px" }} />
                                    <div className="tab-text">
                                        <h2>Trickster Demo</h2>
                                        <p className="icon-links " >
                                            <Link to="https://dranjna.github.io/Trickster/"><FaGithub classNameName="icon me-3 mt-0" /></Link></p>
                                        {/* <p className="description">Replace the dummy text with your image description</p> */}
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>)
}

export default Portfolio;