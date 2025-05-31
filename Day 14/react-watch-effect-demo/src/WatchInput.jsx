// src/WatchInput.jsx
import { useEffect, useRef, useState } from 'react';

function useWatch(value) {
  const [watchedValue, setWatchedValue] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      prevValue.current = value;
      setWatchedValue(value);
    }
  }, [value]);

  return watchedValue;
}

function WatchInput() {
  const [inputValue, setInputValue] = useState('');
  const watchedValue = useWatch(inputValue);

  return (
    <div>
      <h2>Watch Input (Custom Hook)</h2>
      <input
        type="text"
        placeholder="Watch this input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Watched Value: {watchedValue}</p>
    </div>
  );
}

export default WatchInput;
