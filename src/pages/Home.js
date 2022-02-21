import React from "react";
import NavBor from "../Components/NavBor";
import Bolim from "../Components/Bolim";
import Ikkinchi from "../Components/Ikkinchi";
import Uchinchi from "../Components/Uchinchi";
import Tortinchi from "../Components/Tortinchi";
import Besh from "../Components/Besh";
import Olti from "../Components/Olti";
import Yetti from "../Components/Yetti";
import Footer from "../Components/Footer";

const Home = () =>{
    return(
        <div className="max-width">

        <Bolim />
        <Ikkinchi />
        <Uchinchi />
        <Tortinchi />  
        <Besh />
        <Olti />
        <Yetti />
      </div>
    )
}
export default Home;