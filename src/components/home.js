import { Link } from "react-router-dom";

function Home() {
    return ( 
        <>

<div className="home-page">
<div class="container ">
    <div class="row align-items-center vh-100">
        <div class="col-6 mx-auto">
            <div class="card shadow border">
                <div class="card-body d-flex flex-column align-items-center">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <Link to='/product' class="btn btn-primary">Go to product Page</Link>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


        </>
     );
}

export default Home;