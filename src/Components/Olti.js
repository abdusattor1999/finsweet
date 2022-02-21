import react from "react";
import shlapa from "../img/chikeluneo.png";
import oyaplay from "../img/oyaplay.png";
import play from "../img/playicon.svg";


const Olti = ()=>{
    return(
        <div className="bolim6">
            <div className="ichki61">
                <h1>Finsweet was a dream to work with</h1>
                <p>Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.</p>
                <div className="comment61">
                    <img src={shlapa} alt="" />
                    <div className="comment611">
                        <h2>Chikelu Neo</h2>
                        <h3>CEO at MazeAI</h3>
                    </div>
                </div>
            </div>
            <div className="ichki62">
                <button><img src={play} alt="" /></button>
            </div>
        </div>
    )
}
export default Olti;