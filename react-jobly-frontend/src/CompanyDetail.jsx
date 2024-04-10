import JobCardList from "./JobCardList";

/**
 * CompanyDetail
 *
 * state:
 *  - company {}
 *
 * props: none
 *
 *
 * RoutesList -> CompanyDetail -> JobCardList
 *
 */

function CompanyDetail() {
    return (
        <div>
            CompanyDetail
            <JobCardList />
        </div>
    )
}

export default CompanyDetail;