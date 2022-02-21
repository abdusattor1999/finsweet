import React from "react";
import Navbor from "../Components/NavBor";
import Walue from "../Components/Walue";
import StartUp from "../Components/StartUp";
import LocalId from "../Components/LocId";
import Team from "../Components/Team";
import Olti from "../Components/Olti";
import Yetti from "../Components/Yetti";
import Footer from "../Components/Footer";

const AboutUs = () =>{
    return(
        <div className="max-width">
             <Walue/>
             <StartUp/>
             <LocalId/>
             <Team/>
             <Olti />
            <Yetti />
        </div>
    )
}
export default AboutUs;