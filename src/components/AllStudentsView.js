import React from "react";
import {useNavigate} from "react-router-dom";

function AllStudentsView(props) {
    const navigate = useNavigate()
    return(
        <div id={"students-container"}>
            <button id={"view-singular-student-btn"} onClick={() => navigate('./')}>View Selected Student</button>
            <button id={"navigate-to-add-student-btn"} onClick={() => navigate('./addStudent')}>Add a New Student</button>
        </div>
    )
}

export default AllStudentsView;