import React, { useState, useEffect, useContext } from 'react';
import { NameContext } from './App';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const name = useContext(NameContext);

  useEffect(() => {
    document.title = `Practice - Counter ${counter}`;
  }, [counter]);

  const increment = () => setCounter(prevCounter => prevCounter + 1);

  const decrement = () => setCounter(prevCounter => prevCounter - 1);

  const reset = () => setCounter(0);

  return (
    <div>
      <h1>Counter - {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div style={{ marginTop: 10 }}>
        <button onClick={reset}>Reset</button>
      </div>
      <h1>{name}</h1>
    </div>
  );
}
