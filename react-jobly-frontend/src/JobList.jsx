import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import JoblyApi from "./api";

/**
 * JobList
 *
 * state:
 *  - jobs {data:[ { id, title, salary, equity },...], isLoading: boolean}
 *  - searchTerm ("searchTerm")
 *
 * props: none
 *
 *
 * RoutesList -> JobList -> { SearchForm, JobCardList }
 *
 */

// TODO: move rendered console logs under state and add console.logs for every state

function JobList() {
    console.log("Rendered JobList");

    const [jobs, setJobs] = useState({
        data: null,
        isLoading: true
    });
    const [searchTerm, setSearchTerm] = useState(null);

    /** Updates jobs state to fetched job data when component is mounted or
     * a search is submitted */
    useEffect(function fetchJobsData() {
        console.log("Inside of JobList useEffect function");
        async function fetchJobs() {
            const data = await JoblyApi.getJobs(searchTerm);
            setJobs({
                data: data,
                isLoading: false
            });
        };
        fetchJobs();
    }, [searchTerm]);

    /** Updates searchTerm state with the submitted search term */
    function updateSearchTerm(searchTerm) {
        setSearchTerm(searchTerm);
    }

    if (jobs.isLoading) return <i>Loading...</i>;

    return (
        <div className="JobList col-md-8 offset-md-2">
            <SearchForm handleSave={updateSearchTerm} />
            <div className="d-flex justify-content-center my-3">
                {searchTerm
                    ? <h1>{`Search Results for "${searchTerm}"`}</h1>
                    : <h1>All Jobs</h1>
                }
            </div>
            <JobCardList jobs={jobs.data} />
        </div>
    );
}

export default JobList;