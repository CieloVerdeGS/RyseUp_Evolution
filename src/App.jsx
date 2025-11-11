 import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import EvolutionAreasPage from "./pages/EvolutionAreas";  
import NotFound from "./pages/NotFound";
import WhatsAppFab from "./components/whatsAppFab";

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/areas-de-evolucion" element={<EvolutionAreasPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <WhatsAppFab phone="57300XXXXXXX" />
    </>
  );
}
