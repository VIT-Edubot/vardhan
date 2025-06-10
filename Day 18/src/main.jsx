import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import DataPage from "./pages/DataPage";
import HomePage from "./pages/HomePage"; // ✅ import the new Home page

// Root layout route
const rootRoute = createRootRoute({
  component: App,
});

// Home route
const homeRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: HomePage,
});

// Data route
const dataRoute = createRoute({
  path: "/data",
  getParentRoute: () => rootRoute,
  component: DataPage,
});

// Route tree
const routeTree = rootRoute.addChildren([homeRoute, dataRoute]);

// Router instance
const router = createRouter({ routeTree });

// TanStack Query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
