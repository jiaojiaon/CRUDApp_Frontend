import React, {useEffect} from "react";
import {useTitleSetter} from "./context/Title";

function Campus(props) {

    const setTitle = useTitleSetter()

    useEffect(() => {
        setTitle("Single Campus View")
    }, [])

    return (
        <div>
            <div>
                {/* MAP OUT THIS CAMPUS INFO USING PROPS.CAMPUS */}
            </div>
            <div>
                {/* MAP OUT THIS CAMPUS STUDENT INFO USING PROPS.CAMPUS */}
            </div>
        </div>
    )
}

export default Campus;