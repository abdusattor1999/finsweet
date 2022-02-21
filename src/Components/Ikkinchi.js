import strateg from "../img/strategy.png";
import digit from "../img/digitalization.png";
import risk from "../img/risk.png";
import arr from "../img/array.svg";


const Ikkinchi = ()=>{
    return(
       <div className="max-width">
           <div className="bolim2">
           <div className="ichki21">
            <h1>We help more than 1500 companies from all sectors</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
        </div>
        <div className="ichki22">
            <div className="card22">
                <img src={strateg} alt="" />
                <div className="card-text22">
                    <h2>Business strategy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>

            <a href="">Learn More <img src={arr} alt="" /></a>
                </div>
            </div>
            <div className="card22">
                <img src={digit} alt="" />
                <div className="card-text22">
                    <h2>Digitalization</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>

            <a href="">Learn More <img src={arr} alt="" /></a>
                </div>
            </div>
            <div className="card22">
                <img src={risk} alt="" />
                <div className="card-text22">
                    <h2>Risk assessment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>

            <a href="">Learn More <img src={arr} alt="" /></a>
                </div>
            </div>
        </div>
           </div>
       </div>
    )
}

export default Ikkinchi;