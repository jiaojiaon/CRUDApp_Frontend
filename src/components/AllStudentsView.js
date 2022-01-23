import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useTitleSetter} from "./context/Title";

function AllStudentsView(props) {

    const setTitle = useTitleSetter()

    useEffect(() => {
        setTitle("View Students")
    }, [])


    const navigate = useNavigate()
    return(
        <div id={"students-container"}>
            <button id={"view-singular-student-btn"} onClick={() => navigate('./student')} student={null /* enter selected student here */}>View Selected Student</button>
            <button id={"navigate-to-add-student-btn"} onClick={() => navigate('./addStudent')}>Add a New Student</button>
        </div>
    )
}

export default AllStudentsView;