import React, {useContext, useEffect, useReducer} from "react";
import axios from "axios";

const ActionKeyContext = React.createContext()
const DispatchContext = React.createContext()
const StudentsContext = React.createContext()

export function useActionKeyContext() {
    return useContext(ActionKeyContext)
}

export function useDispatchContext() {
    return useContext(DispatchContext)
}

export function useStudentsContext() {
    return useContext(StudentsContext)
}


const ACTIONS = {
    INITIALIZE: 'init',
    ADD_STUDENT: 'add',
    REMOVE_STUDENT: 'remove',
    ADD_CAMPUS_TO_STUDENT: 'add-camp',
    REMOVE_CAMPUS_FROM_STUDENT: 'remove-camp',
    UPDATE_STUDENT_INFO: 'update'
}


async function reducer(students, action) {
    switch (action.type) {
        case ACTIONS.INITIALIZE:
            return action.payload
        case ACTIONS.ADD_STUDENT: {
            addStudent(action.payload)
            return await callUpdatedStudents()
        }
        case ACTIONS.REMOVE_STUDENT:
            return
        case ACTIONS.ADD_CAMPUS_TO_STUDENT:
            return
        case ACTIONS.REMOVE_CAMPUS_FROM_STUDENT:
            return
        case ACTIONS.UPDATE_STUDENT_INFO:
            return
    }
}

async function callUpdatedStudents() {
    let response
    await axios.get('http://localhost:8080/api/students/').then(val => {
        response = val.data
    })
    return response
}

async function addStudent(student) {
    try {
        await axios.post('http://localhost:8080/api/students/', student).then(val => {
        })
    } catch (e) {
        alert("Error adding student")
    }
}

function StudentAPIProvider({children}) {
    const [students, dispatch] = useReducer(reducer, [])

    useEffect(async () => {
        console.log("inside" + students)
    }, [students])

    useEffect(async () => {
        try {
            let response
            await axios.get('http://localhost:8080/api/students/').then(val => {
                response = val.data
                dispatch({type: ACTIONS.INITIALIZE, payload: response})
            })
        } catch (e) {
            alert("Error retrieving students")
        }
    }, [])

    return (
        <ActionKeyContext.Provider value={ACTIONS}>
            <StudentsContext.Provider value={students}>
                <DispatchContext.Provider value={dispatch}>
                    {children}
                </DispatchContext.Provider>
            </StudentsContext.Provider>
        </ActionKeyContext.Provider>
    )

}

export default StudentAPIProvider;