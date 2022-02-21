import React from "react";

import team1 from "../img/team1.png";
import team2 from "../img/team2.png";
import team3 from "../img/team3.png";
import team4 from "../img/team4.png";

const Team = () =>{
    return(
        <div className="max-width">
            <div className="team">
                <div className="team1">
                    <h1>Teamwork is the only way we work</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                </div>
                <div className="team2">
                    <div className="team11">
                    <img src={team1} alt="Team 1" />
                    <div className="teamname">
                        <h2>Support Assist</h2>
                        <h1>Selby Stuart</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.</p>
                    </div>
                    </div>
                    <div className="team11">
                    <img src={team2} alt="Team 2" />
                    <div className="teamname">
                        <h2>Support Assist</h2>
                        <h1>Selby Stuart</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.</p>
                    </div>
                    </div>
                    <div className="team11">
                    <img src={team3} alt="Team 3" />
                    <div className="teamname">
                        <h2>Support Assist</h2>
                        <h1>Selby Stuart</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.</p>
                    </div>
                    </div>
                    <div className="team11">
                    <img src={team4} alt="Team 4" />
                    <div className="teamname">
                        <h2>Support Assist</h2>
                        <h1>Selby Stuart</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team;