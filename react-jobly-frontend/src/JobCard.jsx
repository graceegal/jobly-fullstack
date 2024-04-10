

/**
 * JobCard
 *
 * state: none
 *
 * props:
 *  - job {id, title, salary, equity, companyHandle?, companyName?}
 *
 *
 * JobCardList -> JobCard
 *
 */

function JobCard({job}) {
    console.log("Rendered JobCard");
    const { title, companyName, salary, equity } = job;

    return (
        <div className="card JobCard-card mb-1">
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p className="card-text">{companyName}</p>
                <br />
                <p>Salary: ${salary}</p>
                <p>Equity: {equity}</p>
            </div>
        </div>
    );
}

export default JobCard;