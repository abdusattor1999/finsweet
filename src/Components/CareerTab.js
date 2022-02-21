import React,{useState} from "react";

const Tabbu = () =>{
    const [base,setBase] = useState({});
    const [bos,setBos] = useState(null);
    const data = [
        {
            id : 0,
            name : "Details",
            text : "Design & Create highly engaging industry-related content in both photo, gif & video format Publish Posts on various social media channels Promote content on social networks and monitor engagement (e.g. comments and shares) Research industry-related topics Editing audio and sound design on projects Engage in opportunities to develop original content and concepts for web and mobile Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.     Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels "
        },
        {
            id : 1,
            name : "Requirements",
            text : "Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sint.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nemo voluptas rerum necessitatibus quae explicabo!  "
        },
        {
            id : 2,
            name : "Responsibilities",
            text : "Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, loremmmm     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nemo voluptas rerum necessitatibus quae explicabo!"
        }
    ]
    function funns(post){
        setBos(post.id)
        setBase(post)
    }
    return(
        <div className="tabxona">
            <div className="tab1">
                {data.map((post)=>(
                    <div key={post.id} onClick={(e=>funns(post)) }>

                        <h1 className={bos == post.id ? "hh2 ishla" : "hh2"}>{post.name}</h1>
                        {/* <p className={bos == post.id ? "hh2 ishla" : "hh2"}>{post.text}</p> */}
                    </div>
                ))}
            </div>
            <div className="tab2">
               {base.text}
            </div>
        </div>
    )
}
export default Tabbu;



