import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import { Toaster } from "@components/ui/toaster";
import { Toaster as Sonner } from "@components/ui/sonner";
import { TooltipProvider } from "@components/ui/tooltip";
import Layout from "@components/Layout";
function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
