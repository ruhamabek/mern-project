import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigator from "./auth/Auth0ProviderWithNavigator";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithNavigator>
        <AppRoutes />
      </Auth0ProviderWithNavigator>
    </Router>
  </StrictMode>
);
