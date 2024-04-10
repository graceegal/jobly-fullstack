
/**
 * Homepage
 *
 * state: none
 *
 * props: none
 *
 *
 * RoutesList -> Homepage
 *
 */

function Homepage() {
    console.log("Rendered Homepage");
    return (
        <div className="mt-5 text-center">
            <h1 className="home-title mb-4 ">Jobly</h1>
            <div className="home-description" >All the jobs in one, convenient place.</div>
        </div>
    );
}

export default Homepage;