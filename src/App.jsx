import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Check from "./Check";

// 1.npm create vite@latest app-name -- --template react
//   npm install
//   npm run dev
// 2.Component---> Component & JSX rules etc
// 3.Nested Component
// 4.Props--> children
// 5. Props Drilling
// 6.Events
// 7.imports--> default & named imports
// 8. Vite
// 9. git --> a.git init===> create an empty git repository
//            b.git add . ===> adds new or changed files in your working directory
//            c.
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Check />
    </>
  );
}

export default App;
