import {Link} from "react-router-dom";
import {useTitle} from "./context/Title";

function Header() {

    const title = useTitle()
    console.log(title)

    return (
        <>
            <h1>{title}</h1>
            <nav>
                <ul>
                    <li id={"home-link"}><Link to="/">Home</Link></li>
                    <li><Link to="/campuses">Campuses</Link></li>
                    <li><Link to="/students">Students</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;
