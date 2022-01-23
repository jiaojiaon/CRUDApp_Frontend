import {Link} from "react-router-dom";
import {useTitle} from "./context/Title";

function Header() {

    const title = useTitle()
    console.log(title)

    return (
        <div id={"header"}>
            <h1 id={"title"}>{title}</h1>
            <nav>
                <ul>
                    <li id={"home-link"}><Link to="/">Home</Link></li>
                    <li><Link to="/campuses">Campuses</Link></li>
                    <li><Link to="/students">Students</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
