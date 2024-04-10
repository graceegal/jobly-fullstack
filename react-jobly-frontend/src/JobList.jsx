import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

/**
 * JobList
 *
 * state:
 *  - jobs [ {}, {} ]
 *  - searchTerm
 *
 * props: none
 *
 *
 * RoutesList -> JobList -> { SearchForm, JobCardList }
 *
 */

function JobList() {
    return (
        <div>
            JobList
            <SearchForm />
            <JobCardList />
        </div>
    )
}

export default JobList;