import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Cart() {
    const [products, setProducts] = useState([])
    const [effect, setEffect] = useState(true)
    const [countries, setCountries] = useState([])
    // let effect = true
    let arr = []
    const navigate = useNavigate()
    useEffect(() => {
        

        if(effect === true){
        //     cartArray.forEach((value, idx) => {
        //          axios.get(`https://fakestoreapi.com/products/${value}`)
        //         .then(response => {
        //              setProducts(products.concat(response.data))
        //     })
        //     .catch(e => {
        //         console.log(e);
                
        //     })
        // })
        let cartArray =  localStorage.getItem("cart").split(',')
    cartArray.map(async(id) => {
      const details = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProducts([...products, details.data]);
    });
  };   
    return () => {
        setEffect(false)
        console.log("False");
    }
})
// const [idDetails, setIdDetails] = useState([]);

//   console.log(getDetails);
return (
        <>
         <div style={{display:"flex",flexWrap:"wrap"}}>
         {
            products.map((product, idx) => {
                return(
                    <div class="card" style={{ width: "18rem" }} key={idx}>
                <img src={product.image} class="card-img-top" height="200px" width="200px" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}.</p>
                    <h5 class="card-title">Quantity : <span class="price-font" style={{ color: "red" }}>3</span></h5>
                    <h5 class="card-title">Price : <span class="price-font" style={{ color: "red" }}>${product.price}.00</span></h5>
                    <Link to="/total" class="btn btn-primary">Total</Link>
                </div>
            </div>
                )
            })

                // ["Dallas", "Oregon", "New York", "California"].map((x) =>
                //   <button onClick={() => setCountries(countries.concat(x))}>
                //     <span>{x}</span>                  
                //   </button>
                // )

         }
         </div>

        </>
    );
}

export default Cart;