import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useTitleSetter} from "./context/Title";

function AllCampusView(props) {

    const setTitle = useTitleSetter()

    useEffect(() => {
        setTitle("View Campuses")
    }, [])

    const navigate = useNavigate()
    return(
        <div id={"campus-container"}>
            <button id={"view-singular-campus-btn"} onClick={() => navigate(`./${null /* CAMPUS ID */}`)} campus={null /* enter campus object here */ }>View Selected Campus</button>
            <button id={"navigate-to-add-campus-btn"} onClick={() => navigate('./addCampus')}>Add a New Campus</button>
        </div>
    )
}

export default AllCampusView;