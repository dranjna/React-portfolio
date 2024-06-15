import React from "react";
import Homepage from "./Homepage";
import About from "./About";
import Skills from "./Skills"
import Workexperience from "./Workexperience";
import Hireme from "./Hireme";
import CounterSection from "./ConterSection";
import Portfolio from "./Portfolio";

function Main(){
    return(<>
    <Homepage />
    <About />
    <Workexperience />
    <Skills />
    <Portfolio />
    <CounterSection  className="d-lg-block d-none"/>
    <Hireme />
    </>)
}
export default Main ;