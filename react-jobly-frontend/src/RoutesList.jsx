import { Routes, Route, Navigate } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import Homepage from "./Homepage";

/**
 * RoutesList
 *
 * state: none
 *
 * props: none
 *
 * App -> RoutesList -> { CompanyList, JobsList, CompanyDetail, Homepage}
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
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default RoutesList;