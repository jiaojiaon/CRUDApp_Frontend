import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useTitleSetter} from "./context/Title";
import {useCampusesContext} from "./context/CampusAPIContext";

function AllCampusView(props) {

    const campuses = useCampusesContext()
    const setTitle = useTitleSetter()

    useEffect(() => {
        setTitle("View Campuses")
    }, [])

    const navigate = useNavigate()
    return (
        <div className={'viewer'}>
            <div className={"individual-container"}>
                {(campuses.length > 1) && campuses.map((campus) => {
                    return (
                        <button className={"individual"}>
                            <p><strong>Name:</strong> {campus.name}</p>
                            <p><strong>Address:</strong> {campus.address}</p>
                            <p><strong>Description:</strong> {campus.description}</p>
                        </button>
                    )
                })}
            </div>
            <div className={"btns-container"}>
                <button id={"navigate-to-add-campus-btn"} onClick={() => navigate('./addCampus')}>Add a New Campus
                </button>
            </div>
        </div>
    )
}

export default AllCampusView;