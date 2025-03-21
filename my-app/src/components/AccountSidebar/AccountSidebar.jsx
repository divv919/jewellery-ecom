import './styles.css'

import { Outlet } from 'react-router-dom'
export default function Settings(){
    return(
        <div className="account-section">
            <div className="account-dropdown">
                <div className="account-name">
                <h1>Hello "Your Name" </h1>
                </div>
                <div className="account-config" style={{display : "flex",flexDirection : "column"}}>
                    <a href='./accountInfo'>Visit Account info</a>
                    <a href='./favorites'>Visit Favorites</a>
                    <a href='./orders'>Visit Orders</a>
                </div>
            </div>
            <div className="account-details">
               <Outlet />
            </div>
        </div>
    )
}