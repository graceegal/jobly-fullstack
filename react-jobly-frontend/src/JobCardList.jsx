import JobCard from "./JobCard";

/**
 * JobCardList
 *
 * state: none
 *
 * props:
 *  - jobs [ {}, {}, ...]
 *
 *
 * { JobList, CompanyDetail} -> JobCardList -> JobCard
 *
 */

function JobCardList() {
    return (
        <div>
            Job Card List
            <JobCard />
            <JobCard />
            <JobCard />
        </div>
    );
}

export default JobCardList;