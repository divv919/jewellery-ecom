import { Link , useParams} from "react-router-dom";

export default function NotFound(){
    let params = useParams();
    console.log(params.category)
    return(
        <div>
            <h1>Page Not Found</h1>
            <Link to='/'>Go Home</Link>
        </div>
    )
}