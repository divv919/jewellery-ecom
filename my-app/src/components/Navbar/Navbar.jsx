import staticData from "../../assets/staticData"
import ContactForm from "../ContactForm/ContactForm";
import { useState } from "react";
import './styles.css' 
function Navbar(){
    const [isPopped,setIsPopped]= useState(false);
    function handleClick(){        
        setIsPopped(!isPopped);
    }
    return(
        <div>
                <ContactForm closeFunc={handleClick} isPopped={isPopped}/>

        <div className="nav-container">
        <div className="navbar">
        <h1>{staticData.title}</h1>
        <div className="options"> 
        <a className="border-effect">Favourites</a>
        <a className="border-effect">Cart</a>
        <a className="border-effect">Account</a>
        <a id="contactNav" onClick={handleClick}>Contact</a>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Navbar;