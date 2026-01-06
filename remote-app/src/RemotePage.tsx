import { Link } from "react-router-dom"

export default function RemotePage() {
    return (
        <>
            <h1>Remote page</h1>
            <Link to={"/"}> Back to Main page (host)</Link>    
        </>
    )
}
