import axios from "axios";

let data = []
let err = {}
function apidata(){
    axios.get("https://fakestoreapi.com/products")
    .then(response => {
         data = response.data
    })
    .catch(e => {
        console.log(e);
        err =  e
    })
    if(data){
        return data
    }else{
        return err
    }
}

export default apidata