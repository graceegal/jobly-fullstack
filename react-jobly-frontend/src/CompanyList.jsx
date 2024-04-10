import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

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
 *  - searchTerm ("string")
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

    useEffect(function fetchCompaniesWhenMounted() {
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

    function updateSearchTerm(searchTerm) {
        setSearchTerm(searchTerm);
    }

    if (companies.isLoading) return <i>Loading...</i>;

    return (
        <div className="CompanyList col-md-8 offset-md-2">
            <SearchForm handleSave={updateSearchTerm} />
            {searchTerm
                ? <h1>{`Search Results for "${searchTerm}"`}</h1>
                : <h1>All Companies</h1>
            }
            {companies.data.length > 0
                ? companies.data.map(c => (
                        <Link to={`/companies/${c.name}`} key={c.handle} className="CompanyCard-link" >
                            <CompanyCard company={c} />
                        </Link>
                    ))
                : <p>Sorry, no result were found!</p>
            }


        </div>
    );
}

export default CompanyList;