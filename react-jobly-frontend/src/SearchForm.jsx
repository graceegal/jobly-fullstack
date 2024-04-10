import { useState } from "react";

/**
 * SearchForm
 *
 * state:
 *  - formData
 *
 * props:
 *  - handleSave()
 *
 *
 * {CompanyList, JobList} -> SearchForm
 *
 */

function SearchForm({ handleSave }) {
    const [formData, setFormData] = useState({
        searchTerm: ""
    });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const searchStr = formData.searchTerm.trim();
        console.log("searchStr", searchStr);
        handleSave(searchStr);
        setFormData({ searchTerm: "" });
    }

    return (
        <form className="SearchForm-form my-3">
            <input
                className="SearchForm-input col-9 form-control-lg"
                name="searchTerm"
                value={formData.searchTerm}
                onChange={handleChange}
                placeholder="Enter search term..." />
            <button
                className="btn btn-lg btn-primary SearchForm-btn ms-2"
                type="submit"
                onClick={handleSubmit}>
                Submit
            </button>
        </form>
    );
}

export default SearchForm;