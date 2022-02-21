import React from "react";
import Footer from "../Components/Footer";
import Ymapp from "../Components/Ymaps";

const Contact = () =>{
    return(
        <section>
                    <div className="contactbu">
            <div className="gridcont1">
                <h1>
                Have a question ? Let’s get in touch with us.
                </h1>
                <p>Fill up the Form  and ou team will get back to within 24 hrs</p>
                <form action="" className="formsec">
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                    <input type="email" name="" id="" placeholder="Email Address"/>
                    <textarea name="" placeholder="textarea" className="textarea"></textarea>
                    <input type="submit" value="Submit" className="submitt" />
                </form>
            </div>
            <div className="gridcont2">
                <div className="grid2">
                    <div>
                        <h2>Location</h2>
                        <p>DLF Cybercity, Bhubaneswar, 
                            India, &52050</p>
                    </div>
                    <div>
                        <h2>Contact Us</h2>
                        <p>020 7993 2905</p>
                        <p>hi@finsweet.com</p>
                    </div>
                </div>
                <Ymapp/>
            </div>

        </div>

        </section>
    )
}
export default Contact;