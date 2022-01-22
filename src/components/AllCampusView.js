import React from "react";
import {useNavigate} from "react-router-dom";

function AllCampusView(props) {
    const navigate = useNavigate()
    return(
        <div id={"campus-container"}>
            <button id={"view-singular-campus-btn"} onClick={() => navigate('./')}>View Selected Campus</button>
            <button id={"navigate-to-add-campus-btn"} onClick={() => navigate('./addCampus')}>Add a New Campus</button>
        </div>
    )
}

export default AllCampusView;