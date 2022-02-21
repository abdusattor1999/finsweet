import React from "react";
import invoic from "../img/invoising.svg";
import supp from "../img/support.svg";
import surve from "../img/surveying.svg";

const Uchinchi = ()=>{
    return(
    <div className="uchinchi">
        <div className="ichki31">
            <h1>We are building software solution that solves your business <br/> challenges</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>

        </div>
        <div className="ichki32">
            <div className="card32">
                <img src={invoic} alt="" />
                <h2>Invoicing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
            </div>
            <div className="card32">
                <img src={supp} alt="" />
                <h2>Support</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
            </div>
            <div className="card32">
                <img src={surve} alt="" />
                <h2>Surveying</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
            </div>
        </div>
    </div>
    )
}
export default Uchinchi;