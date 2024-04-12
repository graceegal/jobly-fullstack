import Navigation from "./Navigation";

function Loading() {
    return (
        <>
            <div className="container mt-5">
                <div className="justify-content-center pt-5" style={{height: "calc(100vh - 150px)"}}>
                    <div className="d-flex row container text-center justify-content-center">
                        <div className="spinner-border" style={{ width: "20rem", height: "20rem", color: "white" }} role="status">
                            <span>Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loading;