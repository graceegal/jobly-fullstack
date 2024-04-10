import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

/**
 * CompanyDetail
 *
 * state:
 *  - company: { handle, name, description, numEmployees, logoUrl, jobs }
 *              where jobs is [{ id, title, salary, equity }, ...]
 *
 * props: none
 *
 *
 * RoutesList -> CompanyDetail -> JobCardList
 *
 */

function CompanyDetail() {
    console.log("Rendered CompanyDetail")

    const [company, setCompany] = useState({data: null, isLoading: true});

    const {handle} = useParams();

    /** Updates company state to fetched company data when component is mounted */
    useEffect(function fetchCompanyDetailsWhenMounted() {
        console.log("Inside CompanyDetails useEffect function.");
        async function fetchCompanyDetails() {
            const data = await JoblyApi.getCompany(handle)
            setCompany({data: data, isLoading: false});
        }
        fetchCompanyDetails();
    }, []
    )

    if (company.isLoading) return <i>Loading...</i>;

    return (
        <div className="col-md-8 offset-md-2 pt-5">
            <h4>{company.data.name}</h4>
            <p>{company.data.description}</p>
            <JobCardList jobs={company.data.jobs}/>
        </div>
    )
}

export default CompanyDetail;