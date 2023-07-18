import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5mins
      cacheTime: 300000,
      refetchOnWindowFocus: false,
      retry: (failureCount = 3, error) => {
        if (error instanceof Error && error.message.includes("(retry = false)")) {
          console.log("No retry:", error);
          return false;
        } else {
          return true;
        }
      },
    },
  },
});

root.render(
  <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </ReduxProvider>
);
