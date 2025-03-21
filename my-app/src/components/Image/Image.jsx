import SpinnerLoader from "../SpinnerLoader/SpinnerLoader"
import './styles.css'
import { use, useState } from "react"

export default function Image({height,width,src}){
    const [isLoaded,setIsLoaded]= useState(false);
    return(
    <div className="image-container" style={{height : `${height}`, width : `${width}`}}>
        { !isLoaded&&(
            <div className="spinner-wrapper">
            <SpinnerLoader/>
            </div>
        )}
        <img
        onError={(e)=>{e.target.onerror=null; e.target.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPNrz_iZxUtDGZgDMyqkUX1pZFVRXUWuUCw&s'}}
        src={src}
        onLoad={()=>setIsLoaded(true)}
        style={{visibility : isLoaded?"visible":"hidden"}}
        />
    </div>)
}