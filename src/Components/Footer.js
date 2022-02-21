import react from "react";
import face from "../img/facebook.svg";
import insta from "../img/instagram.svg";
import youtube from "../img/youtube.svg";
import twitter from "../img/twitter.svg";
import finsweet from "../img/finswwet.svg";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <footer>
            <div className="foot1">
                <Link to="/"><img src={finsweet} alt="" /></Link>
                <h1>Bespoke software solutions</h1>
                <div className="social-foot">
                    <a href="https://m.facebook.com/abdusattor1999?ref=bookmarks"><img src={face} alt="" /></a>
                    <a href="https://www.instagram.com/abdusattor.1999/"><img src={insta} alt="" /></a>
                    <a href=""><img src={youtube} alt="" /></a>
                    <a href="https://twitter.com/abdusattor1999"><img src={twitter} alt="" /></a>
                </div>
                <p>© All rights reserved – Finsweet</p>
            </div>
            <div className="foot2">
                <h2>Company</h2>
                <Link to="/aboutus">About Us</Link>
                <Link to="/career">Careers</Link>
                <Link to="/services">Cervices</Link>
                <Link to="/blogin">Blog</Link>
            </div>
            <div className="foot3">
                <h2>Connect</h2>
                <a href="">abdusattor1999@gmail.com</a>
                <a href="">+998 93 676 65 36</a>
            </div>
            <div className="foot4">
                <h2>Join Newsletter</h2>
                <form action="" method="post">
                    <input type="email" name="" id="" placeholder="Type email here"/>
                    <button type="submit">Subscribe</button>
                   
                </form>
                <div className="foothref">
                <Link to="/privac">Privecy & Policy</Link>
                <Link to="/testc">Terms & Conditions</Link>
                </div>
            </div>
            <div className="sariqgul1"></div>
            <div className="sariqgul2"></div>
        </footer>
    ) 
}
export default Footer ;

