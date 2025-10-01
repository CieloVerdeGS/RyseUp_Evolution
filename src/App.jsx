// App.jsx (comentarios en español)
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "../src/pages/Home";
import NotFound from "../src/pages/NotFound";
import WhatsAppFab from "./components/whatsAppFab";
import Footer from "./components/footer";
import CalcFab from "./components/calculator/floatButton";

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <WhatsAppFab phone="57300XXXXXXX" />
      <CalcFab />
      <Footer />
    </>
  );
}
