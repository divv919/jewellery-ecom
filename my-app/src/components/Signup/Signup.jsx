import { useOutletContext } from "react-router-dom"
export default function SignUp(){
    const section = useOutletContext();
    return section==="info"? <h1>SignUp info</h1> : <h1>SignUp creds</h1>
    
}