import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "@/pages/HomePage";

function App() {
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
      <div className="grain-overlay" />
    </div>
  );
}

export default App;
