import React from "react";
import NavBor from "../Components/NavBor";
import {Ser1,Ser2,Ser3,Ser4,Ser5,Ser6} from "../Components/Ser1";
import Olti from "../Components/Olti";
import Yetti from "../Components/Yetti";
import Footer from "../Components/Footer";

const Services = () =>{
    return(
    <div className="max-width">

        <Ser1/>
        <Ser2/>
        <Ser3/>
        <Ser4/>
        <Ser5/>
        <Ser6/>
        <Olti/>
        <Yetti/>
    </div>
    )
}
export default Services;