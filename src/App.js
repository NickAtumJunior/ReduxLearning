import { useSelector,useDispatch } from 'react-redux/es/exports';
import './App.css';
import {actions} from './store/index'

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increment = () => {
       dispatch(actions.increment())
  }
  const decrement = () => {
       dispatch(actions.decrement())
  }
  const addByTen = () => {
      dispatch(actions.addByTen(10))
  }
  return (
    <div className="App">
       <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
        <button onClick={addByTen}>
          Add 10
        </button>
    </div>
  );
}

export default App;
