import staticData from "../../assets/staticData";
import './styles.css'
function Footer(){
    return (
        <footer>
            <footer className="upper">
            <div className="col">
            <h3>Useful Links</h3>
            <a>Delivery Info</a>
            <a>Delivery Info</a>
            <a>Delivery Info</a>
            <a>Delivery Info</a>
            <a>Delivery Info</a>
            </div>
            <div className="col">
            <h3>About Us</h3>
            <a>Blogs</a>
            <a>Blogs</a>
            <a>Blogs</a>
            <a>Blogs</a>
            <a>Blogs</a>
            </div> 
            <div className="col">
            <h3>Contact Us</h3>
            <a>{staticData.phoneNumber}</a>
            <a>Email</a>
            <a>{staticData.address}</a>
            </div>
            
            </footer>
        </footer>
    )
}
export default Footer;