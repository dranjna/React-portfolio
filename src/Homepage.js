import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="cover-bg">
            <div className="overlay"></div>
            <div className="container container-format">
                {/* Correct path to image in the public folder */}
                {/* <div><img src="/images/ranjnaImg.jpeg" alt="thumbnail" /></div> */}
                <div className="profile_img"></div>
                <div className="tilt-text"><h1 className="name_h1">Ranjna Devi</h1></div>
                <div className="working-field mt-3">Web Designer / Front End Developer</div>
                <div className="my-4">
                    <Link to="https://github.com/dranjna"><FaGithub className="icon me-3" /></Link>
                    <Link to="https://www.linkedin.com/in/ranjna-devi-7a69a6137/"><CiLinkedin className="icon mr-3" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
