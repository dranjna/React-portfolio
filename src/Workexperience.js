import React from "react";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";


function Workexperience() {
    return (
        <div className="my-5">

            <ul className="timeline">
                <li><div className="text-center w-100">
                    <h1 className="workEx">Work Experience</h1>
                </div>
                </li>

                <li class="timeline-unverted my-5">
                    <div class="timeline-badge mt-5"><BsFillSuitcaseLgFill />
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h3 class="timeline-title">Front End Developer</h3>
                            <span class="company">Doors4s - From Jan 2023 - April 2024</span>
                        </div>
                        <div class="timeline-body ms-lg-5">
                            <p className="ms-lg-5 ps-lg-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </li>
                <li class="timeline-unverted my-5">
                    <div class="timeline-badge mt-5"><BsFillSuitcaseLgFill />
                    </div>
                    <div class="timeline-panel floatRight" >
                        <div class="timeline-heading text-lg-start">
                            <h3 class="timeline-title">Web Designer</h3>
                            <span class="company">Doors4s - From Jan 2023 - May 2023</span>
                        </div>
                        <div class="timeline-body text-lg-start">
                            <p className="">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </li>
                <li class="timeline-unverted my-5">
                    <div class="timeline-badge mt-5"><BsFillSuitcaseLgFill />
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h3 class="timeline-title">InternShip</h3>
                            <span class="company">NetSparked - From Jan 2019 - May 2019</span>
                        </div>
                        <div class="timeline-body ms-lg-5">
                            <p className="ms-lg-5 ps-lg-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </li>
                <li><div className="text-center w-100">
                    <h1 className="workEx workEx1">Education</h1>
                </div>
                </li>
                <li class="timeline-unverted my-5">
                    <div class="timeline-badge mt-5"><FaGraduationCap />
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h3 class="timeline-title">Bachelors</h3>
                            <span class="company">RIEIT
                                - From 2014 - 2018</span>
                        </div>
                        <div class="timeline-body ms-lg-5">
                            <p className="ms-lg-5 ps-lg-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </li>
                <li class="timeline-unverted my-5">
                    <div class="timeline-badge mt-5"><BsFillSuitcaseLgFill />
                    </div>
                    <div class="timeline-panel floatRight" >
                        <div class="timeline-heading text-lg-start">
                            <h3 class="timeline-title">+2</h3>
                            <span class="company">Girls Sec. Sec. School - From Jan 2013 - May 2014</span>
                        </div>
                        <div class="timeline-body text-lg-start">
                            <p className="">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Workexperience;
