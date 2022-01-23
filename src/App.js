import {BrowserRouter as Router, Link, Route, Routes,} from "react-router-dom";
import AddStudent from "./components/AddStudent";
import AddCampus from "./components/AddCampus";
import Home from "./components/Home";
import AllCampusView from "./components/AllCampusView";
import AllStudentsView from "./components/AllStudentsView";
import {TitleProvider, useTitle} from "./components/context/Title";
import Header from "./components/Header";

function App() {

    return (
        <div id={"main-body"}>
            <Router>
                <TitleProvider>
                    <Header/>
                    <Routes>
                        <Route path={'/'}>

                            <Route index element={<Home/>}/>

                            <Route path={'campuses'}>
                                <Route index element={<AllCampusView/>}/>
                                <Route path={'addCampus'} element={<AddCampus/>}/>
                            </Route>

                            <Route path={'students'}>
                                <Route index element={<AllStudentsView/>}/>
                                <Route path={'addStudent'} element={<AddStudent/>}/>
                            </Route>

                        </Route>
                    </Routes>
                </TitleProvider>
            </Router>
        </div>
    )
}

export default App;
