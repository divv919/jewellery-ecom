import staticData from "../assets/staticData"
function Navbar(){
    return(
        <>
        <div className="navbar">
            
        <a>{staticData.title}</a>

        <div className="options"> 
        <a>Favourites</a>
        <a>Cart</a>
        <a>Account</a>
        </div>
        </div>
        </>
    )
}
export default Navbar;