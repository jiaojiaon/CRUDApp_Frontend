import React, {useEffect} from "react";
import {useTitleSetter} from "./context/Title";

function Student(props) {

    const setTitle = useTitleSetter()

    useEffect(() => {
        setTitle("Single Student Viewer")
    }, [])

    return (
        <div>
            <div>
                {/* MAP OUT THIS STUDENTS INFO USING PROPS.STUDENT */}
            </div>
            <div>
                {/* MAP OUT THIS STUDENTS CAMPUS INFO USING PROPS.CAMPUS */}
            </div>
        </div>
    )
}

export default Student;