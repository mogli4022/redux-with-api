import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData } from './action/action';
import Com from './Com';
import { useEffect } from 'react';

function App() {
  const myState = useSelector((state) => {
    console.log(state)
    return state
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData("https://api.publicapis.org/entries"))
  }, [])
  return (
    <div className="App">
      <button onClick={() => dispatch(getApiData("https://api.publicapis.org/entries"))}>Grt Data</button>
      <Com />
    </div>
  );
}

export default App;
