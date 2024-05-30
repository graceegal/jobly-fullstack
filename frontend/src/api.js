const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {

  static token = null;

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of companies, with optional filter that takes in searchTerm  */

  static async getCompanies(searchTerm) {
    const searchTermParam = searchTerm ? { nameLike: searchTerm } : {};
    const res = await this.request("companies", searchTermParam);
    return res.companies;
  }


  /** Get list of jobs, with optional filter that takes in searchTerm  */

  static async getJobs(searchTerm) {
    const searchTermParam = searchTerm ? { title: searchTerm } : {};
    const res = await this.request("jobs", searchTermParam);
    return res.jobs;
  }

  /** Authenticates user's login credentials; if authenticated, returns
   * JWT token */

  static async login({ username, password }) {
    const res = await this.request("auth/token", { username, password }, "POST");
    return res.token;
  }

  /** Signup new user and validates request; if valid, returns JWT token */

  static async signup({ username, password, firstName, lastName, email }) {
    const res = await this.request("auth/register", { username, password, firstName, lastName, email }, "POST");
    return res.token;
  }

  /** Gets user data given a username */

  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Patches user data */
  static async updateUser(username, userData) {
    const res = await this.request(`users/${username}`, {...userData}, "PATCH");
    return res.user;
  }

}

export default JoblyApi;
