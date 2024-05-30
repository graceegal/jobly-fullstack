import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import Loading from "./Loading";

/**
 * CompanyList
 *
 * state:
 *  - companies {data: [
 *                     {handle: ,
 *                      name: ,
 *                      description: ,
 *                      numEmployees: ,
 *                      logoUrl: }
 *                      , {...} ],
 *              isLoading: boolean}
 *  - searchTerm ("searchTerm")
 *
 * props: none
 *
 *
 * RoutesList -> CompanyList -> { SearchForm, CompanyCard }
 *
 */

function CompanyList() {
    console.log("Rendered CompanyList");
    const [companies, setCompanies] = useState({
        data: null,
        isLoading: true
    });
    const [searchTerm, setSearchTerm] = useState(null);

    /** Updates companies state to fetched company data when component is mounted or
     * a search is submitted */
    useEffect(function fetchCompaniesData() {
        console.log("Inside of CompanyList useEffect function");
        async function fetchCompanies() {
            const data = await JoblyApi.getCompanies(searchTerm);
            setCompanies({
                data: data,
                isLoading: false
            });
        };
        fetchCompanies();
    }, [searchTerm]);

    /** Updates searchTerm state with the submitted search term */
    function updateSearchTerm(searchTerm) {
        setSearchTerm(searchTerm);
    }

    if (companies.isLoading) return <Loading />;

    return (
        <div className="CompanyList col-md-8 offset-md-2">
            <SearchForm handleSave={updateSearchTerm} />
            <div className="d-flex justify-content-center my-3">
                {searchTerm
                    ? <h1>{`Search Results for "${searchTerm}"`}</h1>
                    : <h1>All Companies</h1>
                }
            </div>
            {companies.data.length > 0
                ? companies.data.map(c => (
                    <Link to={`/companies/${c.handle}`} key={c.handle} className="CompanyCard-link" >
                        <CompanyCard company={c} />
                    </Link>
                ))
                : <p className="d-flex justify-content-center my-3">Sorry, no results were found!</p>
            }
        </div>
    );
}

export default CompanyList;