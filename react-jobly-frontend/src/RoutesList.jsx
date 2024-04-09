import { Routes, Route, Navigate } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import Homepage from "./Homepage";

function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:name" element={<CompanyDetail />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default RoutesList;