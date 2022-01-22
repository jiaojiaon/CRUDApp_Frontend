import React from "react";
import {Link, useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    return (
        <div id={"home-container"}>
            <button id={"view-all-campus-btn"} onClick={() => navigate('/campuses')}>View All Campuses</button>
            <button id={"view-all-student-btn"} onClick={() => navigate('/students')}>View All Students</button>
        </div>
    )
}

export default Home;