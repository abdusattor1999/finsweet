import react from "react";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import logo from "../img/finsweet_log.svg";

const NavBor = ()=>{
    return(
        <div className="max-width">
            <nav>
                <div className="nav-logo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className="nav-link">
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/career">Careers</Link>
                    <Link to="/services">Service</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact Us</Link>
                    <form action="" method="post">
                        <button className="btn1" type="submit">Clone Project</button>
                    </form>
                </div>
            </nav>
        </div>
    )
};
export default NavBor;

