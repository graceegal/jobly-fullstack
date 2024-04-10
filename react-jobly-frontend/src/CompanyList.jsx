import { useState, useEffect } from "react";
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
    const [companies, setCompanies] = useState({
        data: null,
        isLoading: true
    });
    const [searchTerm, setSearchTerm] = useState(null);

    useEffect(function fetchCompaniesWhenMounted() {
        async function fetchCompanies() {
            const data = await JoblyApi.getCompanies(searchTerm);
            setCompanies({
                data: data,
                isLoading: false
            });
        };
        fetchCompanies();
    }, [searchTerm]);

    if (companies.isLoading) return <i>Loading...</i>;

    console.log("companies", companies);
    return (
        <div className="CompanyList col-md-8 offset-md-2">
            <SearchForm />
            <CompanyCard company={companies.data[0]}/>
        </div>
    );
}

export default CompanyList;