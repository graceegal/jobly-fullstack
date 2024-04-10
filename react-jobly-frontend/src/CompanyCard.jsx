import { Link } from "react-router-dom";
import "./CompanyCard.css"

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
    console.log("company", company);
    return (
        <Link to={`/companies/${company.name}`} className="CompanyCard-link" >
            <div className="card CompanyCard-card">
                    <div className="card-body">
                        <img src={company.logoUrl} className="float-end" alt={company.name} />
                        <h5 className="card-title">{company.name}</h5>
                        <p className="card-text">{company.description}</p>
                    </div>
            </div>
        </Link>
    );
}

export default CompanyCard;