import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to='/'>Shopping</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to='/cart'>Cart</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to='/product' >Product</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to='/total'>Total</Link>
      </li>
    </ul>
  </div>
</nav>
        </>
     );
}

export default Navbar;