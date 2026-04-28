import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { GenericPage } from "./pages/ServicePage.tsx";

const queryClient = new QueryClient();

const pageRoutes = [
  "/managed-service",
  "/it-outsourcing",
  "/it-service-support",
  "/it-rollout",
  "/it-beratung",
  "/microsoft-365",
  "/azure-infrastruktur",
  "/microsoft-intune",
  "/client-management",
  "/cloud-telefonie",
  "/ki-loesungen",
  "/workshops-schulungen",
  "/ueber-uns",
  "/karriere",
  "/soziales-engagement",
  "/kontakt",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {pageRoutes.map((path) => (
            <Route key={path} path={path} element={<GenericPage path={path} />} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
