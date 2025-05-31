// src/NameForm.jsx
import { useRef, useState } from 'react';

function NameForm() {
  const inputRef = useRef(null);
  const initialValueRef = useRef('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    setSubmittedName(name);
    if (!initialValueRef.current) {
      initialValueRef.current = name;
    }
  };

  return (
    <div>
      <h2>Name Form</h2>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Enter name" />
        <button type="submit">Submit</button>
      </form>
      <p>Submitted Name: {submittedName}</p>
      <p>Initial Value (from useRef): {initialValueRef.current}</p>
    </div>
  );
}

export default NameForm;
