import raect from "react";
import oka from "../img/oka1.png";
import logo1 from "../img/Logoipsum1.svg";
import logo2 from "../img/Logoipsum2.svg";
import logo3 from "../img/Logoipsum3.svg";


const Bolim = ()=>{
    return(
        <section className="max-width">
        <div className="ichki1">
            <div className="ichki11">
                <h1>Prosper with our bespoke solutions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
            <form className="form1" action="">
                <button type="submit">See our services</button>
                <a href="">See our services</a>
            </form>
            <p>Worked with 100+ Companies</p>
            <div className="loremx">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
            </div>
            </div>
            <div className="ichki12">
                <img src={oka} alt="" />
            </div>
            
        </div>
        </section>
    )
}
export default Bolim;