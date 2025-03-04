import staticData from "../assets/static-data"
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