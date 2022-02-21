import React from "react";
import mak from "../img/makaron.svg";
import strateg from "../img/helping.png";
import array from "../img/array.svg";
import xoshiya from "../img/xoshiya.svg";

const Tortinchi = ()=>{
    return(
        <div className="tortinchi">
            <div className="grid4">
                    <div className="ichki41">
                            <h1>The energy of a start-up combined with 30 years of experience.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                            <div className="ichki411">
                                <div>
                                    <h2>15+</h2>
                                    <h3>Awards recieved</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                                </div>
                                <div>
                                    <h2>500+</h2>
                                    <h3>Clients served</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                                </div>
                            </div>
                    </div>
                    <div className="ichki42">
                        <img src={mak} alt="" />
                    </div>
            </div>
            <div className="strateg4">
                    <div className="buttonxona4">
                        <button>Business strategy</button>
                        <button>Digitalization</button>
                        <button>Risk assessment</button>
                    </div>
                    <div className="grid42">
                       <div className="grid421">
                           <h1>Helping clients with research and strategy for their business</h1>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque. 
                               <br />
                               <br />
Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque. </p>
<a href="">See All Services <img src={array} alt="Bu array" /></a>
                       </div>
                            <div className="grid422">
                               <img src={strateg} alt="" /> 
                            </div> 
            <img className="xoshiya" src={xoshiya} alt="" />
            </div>

            </div>
        </div>
    )

}
export default Tortinchi ;