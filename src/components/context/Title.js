import React, {useContext, useState} from "react";

const TitleContext = React.createContext()
const TitleUpdateContext = React.createContext()

export function useTitle () {
    return useContext(TitleContext)
}

export function useTitleSetter () {
    return useContext(TitleUpdateContext)
}

export function TitleProvider({ children }) {
    const [title, setTitle] = useState("Home")
    function changeTitle(currentPlace) {
        setTitle(currentPlace)
    }

    return (
        <TitleContext.Provider value={title}>
            <TitleUpdateContext.Provider value={changeTitle}>
                {children}
            </TitleUpdateContext.Provider>
        </TitleContext.Provider>
    )
}