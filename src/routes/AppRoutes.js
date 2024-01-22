import { Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";
import SignUp from "../views/SignUp";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home user={props.user} />}></Route>
            <Route
                path="/login"
                element={<Login user={props.user} setUser={props.setUser} />}
            ></Route>
            <Route path="/signup" element={<SignUp user={props.user} />} ></Route>
        </Routes>
    )
}

export default AppRoutes;