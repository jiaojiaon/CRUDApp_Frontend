import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {useTitleSetter} from "./context/Title";
import {useDispatchContext, useActionKeyContext} from "./context/StudentAPIContext";

//LEADS TO THE ADD STUDENT SCREEN
function AddStudent() {

    const ACTIONS = useActionKeyContext()
    const dispatch = useDispatchContext()

    const setTitle = useTitleSetter()

    useEffect(() => {
        setTitle("Adding Students")
    }, [])

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        let studentObj = {}
        studentObj.firstName = event.target[0].value
        studentObj.lastName = event.target[1].value
        studentObj.gpa = event.target[2].value
        studentObj.email = event.target[3].value
        dispatch({type: ACTIONS.ADD_STUDENT, payload: studentObj})
        event.target[0].value = ""
        event.target[1].value = ""
        event.target[2].value = ""
        event.target[3].value = ""
    }

    //EXITS BACK TO HOME
    const exitClick = () => {
        navigate('..')
    }


    return (
        <div className={"adding"} id={"add-students"}>

            <h1 className={"add-titles"}>ADD A STUDENT!</h1>

            <div className={"add-something-form-container"} id={"add-student-form-container"}>

                <form className={"add-something-form"} id={"add-student-form"} onSubmit={handleSubmit}>

                    <label htmlFor={"FirstName"}>Enter Student First Name: <input type={"text"} name={"FirstName"}
                                                                                  placeholder={"ex: John"}/></label>
                    <label htmlFor={"LastName"}>Enter Student Last Name: <input type={"text"} name={"LastName"}
                                                                                 placeholder={"ex: Doe"}/></label>
                    <label htmlFor={"GPA"}>Enter Student GPA: <input type={"text"} name={"GPA"}
                                                                            placeholder={"ex: 3.2"}/></label>
                    <label htmlFor={"Email-Address"}>Enter Student Email: <input type={"text"}
                                                                                      name={"Email-Address"}
                                                                                      placeholder={"ex: johndoe@gmail.com"}/></label>

                    <div className={"submit-btns-container"}>

                        <button className={"submit-btns"} type={"submit"}>Submit</button>

                    </div>

                </form>

                {/* ===== THIS CLOSES THE STUDENT FORM CONTAINER ===== */}
            </div>

            <button className={"leave-add-something-btn"} id={"leave-add-students-btn"} onClick={exitClick}>EXIT
            </ button>
            {/* ===== THIS CLOSES THE MAIN PARENT CONTAINER ===== */}
        </div>
    )

}

export default AddStudent;