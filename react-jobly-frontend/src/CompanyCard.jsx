import "./CompanyCard.css";

/**
 * CompanyCard
 *
 * state: none
 *
 * props:
 *  - company {handle: ,
 *             name: ,
 *             description: ,
 *             numEmployees: ,
 *             logoUrl: }
 *
 *
 * CompanyList -> CompanyCard
 *
 */

function CompanyCard({ company }) {
    console.log("Rendered CompanyCard");
    const { name, logoUrl, description } = company;

    return (
        <div className="card CompanyCard-card mb-1">
            <div className="card-body">
                {logoUrl && <img src={logoUrl} className="float-end" alt={name} />}
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default CompanyCard;