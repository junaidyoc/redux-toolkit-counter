import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counter/counterSlice';
import './App.css';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Counter</h1>
      
      <h3> {count} </h3>
      <button onClick={()=> dispatch(increment()) }>Increment</button>
      <button onClick={()=> dispatch(decrement()) }>Decrement</button>
    
    </div>
  );
}

export default App;