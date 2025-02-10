import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigator from "./auth/Auth0ProviderWithNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "./components/ui/sonner";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigator>
          <AppRoutes />
          <Toaster visibleToasts={1} position="top-right" richColors />
        </Auth0ProviderWithNavigator>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
