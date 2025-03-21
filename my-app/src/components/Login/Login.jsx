import { useOutletContext } from "react-router-dom"
export default function Login(){
    const section = useOutletContext();
    return section==="info"? <h1>Login info</h1> : <h1>Login creds</h1>
    
}