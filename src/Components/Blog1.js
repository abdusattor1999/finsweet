import React from "react";
import andrey from "../img/andrey.png";
import tennis from "../img/tennis.png";
import array from "../img/array.svg";

const Process = () =>{
    return(
        <div className="internal">
            <div className="int1">
                <div className="intflex">
                    <div>
                        <img src={andrey} alt="" />
                        <p>Andrew Jonson</p>
                    </div>
                    <div>
                        <p>Posted on 27th January 2021</p>
                    </div>
                </div>
                <h1>
                Our internal process and longerm vision
                </h1>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the
                </p>
                <a href="">Read More <img src={array} alt="" /></a>
            </div>
            <div className="int2">
                <img src={tennis} alt="" />
            </div>
        </div>
    )
}
 export default Process;