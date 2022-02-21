import React from "react";
import ident from "../img/identific.png";

const LocalId = () =>{
    return(
        <div className="max-width">
            <div className="local">
        <div className="loc1">
            <h1>We want to get local identification in every corner of the world in this era of global citizenship.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
        </div>
        <div className="loc2">
            <img src={ident} alt="" />
        </div>
            </div>
        </div>
    )
}
export default LocalId ;