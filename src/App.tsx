
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PravachansPage from "./pages/PravachansPage";
import RitualsHub from "./pages/RitualsHub";
import FestivalAlerts from "./pages/FestivalAlerts";
import SevaRegistration from "./pages/SevaRegistration";
import PanditConnect from "./pages/PanditConnect";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="pravachans" element={<PravachansPage />} />
            <Route path="rituals-hub" element={<RitualsHub />} />
            <Route path="festival-alerts" element={<FestivalAlerts />} />
            <Route path="seva-registration" element={<SevaRegistration />} />
            <Route path="pandit-connect" element={<PanditConnect />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
