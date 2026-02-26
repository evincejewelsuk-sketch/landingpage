import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "@/pages/HomePage";

function App() {
  // Remove any watermarks
  useEffect(() => {
    const removeWatermark = () => {
      const selectors = [
        'a[href*="emergent"]',
        'div[style*="position: fixed"][style*="bottom"]',
        '[data-testid*="watermark"]',
        'div[style*="z-index: 9999"]'
      ];
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          if (el.textContent?.toLowerCase().includes('emergent') || 
              el.innerHTML?.toLowerCase().includes('emergent')) {
            el.remove();
          }
        });
      });
    };
    
    removeWatermark();
    const interval = setInterval(removeWatermark, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster 
        position="bottom-right" 
        richColors
        toastOptions={{
          style: {
            background: '#FFFFF0',
            border: '1px solid #D4AF37',
            color: '#1A1A1A',
          },
          className: 'font-sans',
        }}
      />
      <Analytics />
      <div className="grain-overlay" />
    </div>
  );
}

export default App;
