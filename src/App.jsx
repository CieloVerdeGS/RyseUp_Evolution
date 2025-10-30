import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "../src/pages/Home";
import NotFound from "../src/pages/NotFound";
import WhatsAppFab from "./components/whatsAppFab";
import HealthAndWellness from "../src/pages/HealthAndWellness";
import Business from "../src/pages/Business";
import PersonalAndSpiritual from "../src/pages/PersonalAndSpiritual";
import Dreams from "../src/pages/Dreams";

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salud-y-bienestar" element={<HealthAndWellness />} />
          <Route path="/negocios" element={<Business />} />
          <Route path="/personal-y-espiritual" element={<PersonalAndSpiritual />} />
          <Route path="/suenos" element={<Dreams />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <WhatsAppFab phone="57300XXXXXXX" />
    </>
  );
}
