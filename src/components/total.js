import { Link } from "react-router-dom";

function Total() {
    return (
        <>
            <div className="container ">
                <div class="row align-items-center vh-100">
                    <div class="col-6 mx-auto">
                        <div class="card shadow border">
                            <div class="card-body d-flex flex-column align-items-center">
                                <h1>Total Page</h1>
                                <h5 class="card-title">Product title</h5>
                                <p>Quantity : 3</p>
                                <p>Price : 100</p>
                                <p>Total : 300</p>
                                <Link to='/' class="btn btn-primary">Go to Home Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Total;