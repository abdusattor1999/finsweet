import react from "react";

const Formbu = ()=>{
    return(
       <div className="formbu">
           <h1>Apply Now</h1>
           <form action="">
                <div className="grid2">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="First Name"/>
                    <input type="email" placeholder="Email id"/>
                    <input type="tel" placeholder="Mobile No"/>
                </div>
                <textarea className="textarea" placeholder="Why do you thing you are good fit for Ether?"></textarea>
            <input type="submit" value="Submit" className="submitt" />
           </form>
       </div>
    )
}
export default Formbu;