import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import HomePage from "./app/Home.tsx";
import LoginPage from "./app/Login.tsx";
import RegisterPage from "./app/Register.tsx";
import TwoFAPage from "./app/2fa.tsx";
import NewTransactionPage from "./app/NewTransaction.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/2fa" element={<TwoFAPage />} />
            <Route path="/new-transaction" element={<NewTransactionPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </TooltipProvider>
  </StrictMode>
);
