import axios from "axios";

export const getApiData = (url) => {
    return function (dispatch) {
        axios.get(url).then((res) => {
            console.log(res)
            dispatch({ type: 'api', abc: res })
        })
    }
}


// "https://api.publicapis.org/entries"