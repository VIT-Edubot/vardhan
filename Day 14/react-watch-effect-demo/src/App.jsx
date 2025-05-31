// src/App.jsx
import React from "react";
import "./styles.css";
import NameForm from "./NameForm";
import WatchEffect from "./WatchEffect";
import WatchInput from "./WatchInput";
import FocusInput from "./FocusInput";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>React Watch Effect Demo</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>1. useRef - Persistent Input</h2>
        <NameForm />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>2. useEffect - Watch Input Changes</h2>
        <WatchEffect />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>3. useWatch Hook - Track Specific Value</h2>
        <WatchInput />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>4. useRef - Focus Input</h2>
        <FocusInput />
      </section>
    </div>
  );
}

export default App;
