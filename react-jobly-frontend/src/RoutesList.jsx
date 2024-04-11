import { Routes, Route, Navigate } from "react-router-dom";
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
 * props: none
 *
 * App -> RoutesList -> { CompanyList, JobsList, CompanyDetail, Homepage, NotFound}
 *
 */

function RoutesList() {
    console.log("Rendered RoutesList");
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:handle" element={<CompanyDetail />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesList;