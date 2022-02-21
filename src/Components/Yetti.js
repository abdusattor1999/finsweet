import react from "react";
import strateg from "../img/strategy.png";
import digit from "../img/digitalization.png";
import risk from "../img/risk.png";
import arr from "../img/array.svg";

const Yetti = ()=>{
    return(
        <div className="bolim7">
            <h1>Latest Blog & News</h1>
            <div className="card7">
                    <div className="card77">
                        <img src={strateg} alt="" />
                        <div className="card-text77">
                            <h2>Why you have to digitalize in 2021</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>

                             <a href="">Learn More <img src={arr} alt="" /></a>
                        </div>
                    </div>
                    <div className="card77">
                        <img src={digit} alt="" />
                        <div className="card-text77">
                            <h2>Our internal process and longerm vision</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>

                             <a href="">Learn More <img src={arr} alt="" /></a>
                        </div>
                    </div>
                    <div className="card77">
                        <img src={risk} alt="" />
                        <div className="card-text77">
                            <h2>Helping the next generation of leaders</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>

                             <a href="">Learn More <img src={arr} alt="" /></a>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Yetti;