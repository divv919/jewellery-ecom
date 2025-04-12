// import staticData from "../../assets/staticData";
import ContactForm from "../ContactForm/ContactForm";
import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [isPopped, setIsPopped] = useState(false);
  function handleClick() {
    setIsPopped(!isPopped);
  }
  return (
    <div>
      <ContactForm closeFunc={handleClick} isPopped={isPopped} />

      <div className="nav-container">
        <div className="navbar">
          <div className="logo" onClick={() => navigate("/")}>
            <img src="../../public/logo2.png"></img>
            <p className="logo-title">Premium Jewellery</p>
          </div>
          <div className="options">
            <a
              className="border-effect"
              onClick={() => navigate("/account/favorites")}
            >
              Favourites
            </a>
            <a className="border-effect" onClick={() => navigate("/cart")}>
              Cart
            </a>
            <a
              className="border-effect"
              onClick={() => navigate("/account/accountInfo")}
            >
              Account
            </a>
            <a id="contactNav" onClick={handleClick}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
