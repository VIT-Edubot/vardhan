// src/WatchEffect.jsx
import { useState, useEffect } from 'react';

function WatchEffect() {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Input value changed:', inputValue);
  }, [inputValue]);

  return (
    <div>
      <h2>Watch Effect</h2>
      <input
        type="text"
        placeholder="Type something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
}

export default WatchEffect;
