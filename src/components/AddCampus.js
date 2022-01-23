import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {useTitleSetter} from "./context/Title";

//LEADS TO THE ADD CAMPUS SCREEN
function AddCampus(props) {

    const setTitle = useTitleSetter()

    useEffect(() => {
        setTitle("Adding Campuses")
    }, [])

    const navigate = useNavigate()
    const [newCampus, setNewCampus] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        let campusObj = {}
        campusObj.name = event.target[0].value
        campusObj.address = event.target[1].value
        campusObj.description = event.target[2].value
        setNewCampus(campusObj)
        //ADD THIS NEW CAMPUS TO THE API
    }

    //EXITS BACK TO HOME
    const exitClick = () => {
        navigate('..')
    }


    return (
        <div className={"adding"} id={"add-campus"}>

            <h1 className={"add-titles"}>ADD A CAMPUS!</h1>

            <div className={"add-something-form-container"} id={"add-campus-form-container"}>

                <form className={"add-something-form"} id={"add-campus-form"} onSubmit={handleSubmit}>

                    <label htmlFor={"Name"}>Enter the Campus Name: <input type={"text"} name={"Name"}
                                                                                  placeholder={"ex: Brooklyn College"}/></label>

                    <label htmlFor={"Address"}>Enter The Campus Address: <input type={"text"} name={"Address"}
                                                                                 placeholder={"ex: 2014 Forest Hills Dr, Fayetteville, NC 28303"}/></label>

                    <label htmlFor={"Description"}>Enter The Campus Description: <textarea id={"description-box"} name={"Description"}
                                                                            placeholder={"ex: Nice and spacious, very clean and quiet."}/></label>

                    <div className={"submit-btns-container"}>

                        <button className={"submit-btns"} type={"submit"}>Submit</button>

                    </div>


                </form>

                {/* ===== THIS CLOSES THE CAMPUS FORM CONTAINER ===== */}
            </div>

            <button className={"leave-add-something-btn"} id={"leave-add-campus-btn"} onClick={exitClick}>EXIT</ button>
            {/* ===== THIS CLOSES THE MAIN PARENT CONTAINER ===== */}
        </div>
    )

}

export default AddCampus;