import './App.css';
import { useState } from 'react';

function App() {
  return(
    <div>
      <RenderFunction />
    </div>
  );
}
export default App;

export function RenderFunction() {
  const [count, setCount] = useState(0);
  const stateHandler = () => {
      setCount(count => count + 1);
  }
  const handleState = () => {
    setCount(count => count - 1);
  }
  return(
    <div className="cal-container">
    <>
    <button className='btn1' onClick={handleState}>Decrease</button>
    <span className="count">{ count }</span>
    <button className="btn2" onClick={stateHandler}>Increase</button>
    </>
    </div>
  );
}
