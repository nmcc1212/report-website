import "./App.css";

import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/theme-provider";

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
        <a href="/transactions" className="text-blue-500">
          Go to transactions
        </a>
      </ThemeProvider>
    </TooltipProvider>
  );
}

export default App;
