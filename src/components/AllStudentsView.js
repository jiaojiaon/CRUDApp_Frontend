import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useTitleSetter} from "./context/Title";
import {useStudentsContext} from "./context/StudentAPIContext";

function AllStudentsView() {

    const students = useStudentsContext()
    const setTitle = useTitleSetter()

    useEffect(() => {
        setTitle("View Students")
    }, [])


    const navigate = useNavigate()
    return(
        <div className={'viewer'}>
            <div className={"individual-container"} >
                {(students.length > 1) && students.map((student) => {
                    return (
                        <button className={"individual"}>
                            <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
                            <p><strong>GPA:</strong> {student.gpa}</p>
                            <p><strong>Email:</strong> {student.email}</p>
                        </button>
                    )
                })}
            </div>
            <div className={"btns-container"}>
                <button id={"navigate-to-add-student-btn"} onClick={() => navigate('./addStudent')}><strong>Add a New Student</strong></button>
        </div>
        </div>

    )
}

export default AllStudentsView;