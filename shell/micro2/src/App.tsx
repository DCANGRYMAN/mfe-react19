// src/Micro2App.tsx
import { useState } from "react";
import "./App.css";

export default function Micro2App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Micro2 App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/Micro2App.tsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}
