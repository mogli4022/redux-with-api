import { useSelector } from "react-redux";

function Com() {
    const myState = useSelector((state) => {
        console.log(state)
        return state
    });
    return (<>
    </>);
}

export default Com;