import { Link } from "react-router-dom"

export default function AboutPage() {
    return (
        <>
            <h1>About page</h1>
            <Link to={"/"}>
                <h2>Go back</h2>
            </Link>
        </>
    )
}
