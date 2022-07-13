import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

function About() {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
          .then(response => {
                setItems(response.data)
          })
          .catch(e => {
              console.log(e);
      
          })
      })
      const cartItems = (id) => {
        alert("Product is Added in Cart")
        setCart([...cart, id])
        localStorage.setItem("cart",cart)
      }

      const allCartProducts = () => {
        localStorage.setItem("cart",cart)
      }

    const navigate = useNavigate()
    const { id, username } = useParams()
    return (
        <>
        <div className='row'>
        {
                items.map((item, inx) => {
                    return(
                        <div class="card m-5" key={inx} style={{ width: "18rem" }}>
                <img src={item.image} class="card-img-top" height="200px" width="200px" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                    <h5 class="card-title">Price : <span class="price-font" style={{ color: "red" }}>${item.price}</span></h5>
                    <button className='btn btn-primary' onClick={() => cartItems(item.id)}>Add To Cart</button>
                    <Link to="/cart" class="btn btn-primary" onClick={() => allCartProducts()}>Go to Cart Page</Link>
                </div>
            </div>
                    )
                })
            }
        </div>
            
        </>
    );
}

export default About;