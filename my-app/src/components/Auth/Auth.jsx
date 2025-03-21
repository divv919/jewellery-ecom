import './styles.css'
import { Outlet } from 'react-router-dom'
export default function Auth(){
    return(
        <div className="auth-container">
            <div className="auth-info">
            <Outlet context='info'/>
            </div>
            <div className="auth-cred">
            <Outlet context='cred'/>
            </div>
        </div>
    )
}