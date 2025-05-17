import React, { useState } from 'react';
import './index.css'

const Counter_App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>
      <button onClick={() => setCount(0)}>🔄</button>
    </div>
  );
};

export default Counter_App;