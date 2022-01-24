import React, {useContext, useEffect, useReducer} from "react";
import axios from "axios";

const ActionKeyContext = React.createContext()
const DispatchContext = React.createContext()
const CampusesContext = React.createContext()

export function useActionKeyContext() {
    return useContext(ActionKeyContext)
}

export function useDispatchContext() {
    return useContext(DispatchContext)
}

export function useCampusesContext() {
    return useContext(CampusesContext)
}


const ACTIONS = {
    INITIALIZE: 'init',
    ADD_CAMPUS: 'add',
    REMOVE_CAMPUS: 'remove',
    ADD_STUDENT_TO_CAMPUS: 'add-camp',
    REMOVE_STUDENT_FROM_CAMPUS: 'remove-camp',
    UPDATE_CAMPUS_INFO: 'update'
}


function reducer(students, action) {
    switch (action.type) {
        case ACTIONS.INITIALIZE:
            return action.payload
        case ACTIONS.ADD_CAMPUS:
            return addCampus(action.payload)
        case ACTIONS.REMOVE_CAMPUS:
            return
        case ACTIONS.ADD_STUDENT_TO_CAMPUS:
            return
        case ACTIONS.REMOVE_STUDENT_FROM_CAMPUS:
            return
        case ACTIONS.UPDATE_CAMPUS_INFO:
            return
    }
}

async function callUpdatedCampuses() {
    await axios.get('http://localhost:8080/api/campuses/').then(val => {
        let {response} = val.data
    })
    return
}

async function addCampus(campus) {

    try {
        await axios.post('http://localhost:8080/api/campuses/', campus).then(val => {
            console.log(val)
            console.log(campus)
        })
    } catch (e) {
        alert("Error adding campus")
    }

    return callUpdatedCampuses()
}

function CampusAPIProvider({children}) {

    const [campuses, dispatch] = useReducer(reducer, {})

    useEffect(async () => {
        try {
            let response
            await axios.get('http://localhost:8080/api/campuses/').then(val => {
                response = val.data
                dispatch({type: ACTIONS.INITIALIZE, payload: response})
            })
        } catch (e) {
            alert("Error retrieving campuses")
        }
    }, [])

    return (
        <ActionKeyContext.Provider value={ACTIONS}>
            <CampusesContext.Provider value={campuses}>
                <DispatchContext.Provider value={dispatch}>
                    {children}
                </DispatchContext.Provider>
            </CampusesContext.Provider>
        </ActionKeyContext.Provider>
    )

}

export default CampusAPIProvider;