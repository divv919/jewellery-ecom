import staticData from "../assets/staticData";
function Footer(){
    return (
        <footer>
            <div className="upper">
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
            
            </div>
        </footer>
    )
}
export default Footer;