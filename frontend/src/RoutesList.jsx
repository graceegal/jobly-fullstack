import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import Homepage from "./Homepage";
import NotFound from "./NotFound";
import ProfileForm from "./ProfileForm";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

/**
 * RoutesList
 *
 * state: none
 *
 * props: login()
 *        signup()
 *
 * App -> RoutesList -> { CompanyList, JobsList, CompanyDetail, Homepage,
 *                      NotFound, ProfileForm, SignupForm, LoginForm}
 *
 */

function RoutesList({ login, signup, updateUserData }) {
    console.log("Rendered RoutesList");

    const { currUser } = useContext(userContext);

    return (
        currUser
            ?   <Routes>
                    < Route path = "/" element = { < Homepage />} />
                    < Route path = "/*" element = {<NotFound />} />
                    < Route path = "/companies" element = {< CompanyList />} />
                    < Route path = "/companies/:handle" element = {< CompanyDetail />} />
                    < Route path = "/jobs" element = {< JobList />} />
                    < Route path = "/profile" element = {< ProfileForm updateUserData={updateUserData}/>} />
                    < Route path = "/login" element = {<Navigate to="/profile"/>} />
                    < Route path = "/signup" element = {<Navigate to="/profile"/>}/>
                </Routes >
            :   <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/*" element = {<Navigate to="/"/>} />
                    <Route path="/login" element={
                        <LoginForm login={login} />} />
                    <Route path="/signup" element={
                        <SignupForm signup={signup} />} />
                </Routes>
    );
}

export default RoutesList;