import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { primaryNavigation } from "@/lib/navigation";
import ContentPage from "./pages/ContentPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";
import UtilityPage from "./pages/UtilityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {primaryNavigation.map((page) => (
            <Route key={page.path} path={page.path} element={<ContentPage page={page} />} />
          ))}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<UtilityPage type="contact" />} />
          <Route path="/login" element={<UtilityPage type="login" />} />
          <Route path="/join" element={<UtilityPage type="join" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
