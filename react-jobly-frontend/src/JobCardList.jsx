import JobCard from "./JobCard";

/**
 * JobCardList
 *
 * state: none
 *
 * props:
 *  - jobs [ {id, title, salary, equity, companyHandle?, companyName?}, ...]
 *
 *
 * { JobList, CompanyDetail} -> JobCardList -> JobCard
 *
 */

function JobCardList({ jobs }) {
    console.log("Rendered JobCardList");
    return (
        <div>
            {jobs.length > 0
                ? jobs.map(j => (
                    <div key={j.id} >
                        <JobCard job={j} />
                    </div>
                ))
                : <p className="d-flex justify-content-center my-3">Sorry, no results were found!</p>}
        </div>
    );
}

export default JobCardList;

