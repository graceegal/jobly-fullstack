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
    const {name, logoUrl, description} = company

    return (
        <Link to={`/companies/${name}`} className="CompanyCard-link" >
            <div className="card CompanyCard-card">
                    <div className="card-body">
                        <img src={logoUrl} className="float-end" alt={name} />
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
            </div>
        </Link>
    );
}

export default CompanyCard;