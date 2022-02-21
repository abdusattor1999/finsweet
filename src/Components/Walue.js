import React from "react";


import makmak from "../img/organizator.png";
import ident from "../img/identific.png";

const Walue = ()=>{
    return(
        <div className="max-width">
            <div className="walue1">
                <div className="walue11">
                    <h1>
                    We value human, organizational, and operational intelligence, not just artificial
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                    <button>Work With Us</button>
                </div>
                <div className="walue12">
                    <img src={makmak} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Walue;