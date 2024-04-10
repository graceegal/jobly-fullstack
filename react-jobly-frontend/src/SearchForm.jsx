import { useState } from "react";

/**
 * SearchForm
 *
 * state:
 *  - formData { searchTerm: ""}
 *
 * props:
 *  - handleSave()
 *
 *
 * {CompanyList, JobList} -> SearchForm
 *
 */

function SearchForm({ handleSave }) {
    console.log("Rendered SearchForm");

    const [formData, setFormData] = useState({
        searchTerm: ""
    });

    /** update form inputs */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /** call parent function and reset form inputs */
    function handleSubmit(evt) {
        evt.preventDefault();
        const searchStr = formData.searchTerm.trim();
        handleSave(searchStr);
        // TODO: don't need to reset formData
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