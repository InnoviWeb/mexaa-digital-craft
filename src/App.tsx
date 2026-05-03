import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ManagedService from "./pages/subpages/ManagedService";
import ItOutsourcing from "./pages/subpages/ItOutsourcing";
import ItServiceSupport from "./pages/subpages/ItServiceSupport";
import ItRollout from "./pages/subpages/ItRollout";
import ItBeratung from "./pages/subpages/ItBeratung";
import Microsoft365 from "./pages/subpages/Microsoft365";
import AzureInfrastruktur from "./pages/subpages/AzureInfrastruktur";
import MicrosoftIntune from "./pages/subpages/MicrosoftIntune";
import ClientManagement from "./pages/subpages/ClientManagement";
import CloudTelefonie from "./pages/subpages/CloudTelefonie";
import KiLoesungen from "./pages/subpages/KiLoesungen";
import WorkshopsSchulungen from "./pages/subpages/WorkshopsSchulungen";
import UeberUns from "./pages/subpages/UeberUns";
import Karriere from "./pages/subpages/Karriere";
import SozialesEngagement from "./pages/subpages/SozialesEngagement";
import Kontakt from "./pages/subpages/Kontakt";
import Impressum from "./pages/subpages/Impressum";
import { ScrollToTop } from "./components/ScrollToTop";
import { SplashScreen } from "./components/SplashScreen";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/managed-service" element={<ManagedService />} />
          <Route path="/it-outsourcing" element={<ItOutsourcing />} />
          <Route path="/it-service-support" element={<ItServiceSupport />} />
          <Route path="/it-rollout" element={<ItRollout />} />
          <Route path="/it-beratung" element={<ItBeratung />} />
          <Route path="/microsoft-365" element={<Microsoft365 />} />
          <Route path="/azure-infrastruktur" element={<AzureInfrastruktur />} />
          <Route path="/microsoft-intune" element={<MicrosoftIntune />} />
          <Route path="/client-management" element={<ClientManagement />} />
          <Route path="/cloud-telefonie" element={<CloudTelefonie />} />
          <Route path="/ki-loesungen" element={<KiLoesungen />} />
          <Route path="/workshops-schulungen" element={<WorkshopsSchulungen />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/soziales-engagement" element={<SozialesEngagement />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
