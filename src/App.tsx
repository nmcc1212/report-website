import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./components/authentication-03";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/theme-provider";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
// `      <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  return (
    <TooltipProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <h1 className="text-2xl font-bold text-center mt-8">Welcome to hell</h1>
        <a href="/home" className="text-blue-500">
          Go to homepage
        </a>
        <br />
        <a href="/login" className="text-blue-500">
          Go to login
        </a>
        <br />
        <a href="/register" className="text-blue-500">
          Go to register
        </a>
        <br />
        <a href="/2fa" className="text-blue-500">
          Go to 2fa
        </a>
        <br />
        <a href="/new-transaction" className="text-blue-500">
          Go to new transaction
        </a>
      </ThemeProvider>
    </TooltipProvider>
  );
}

export default App;
