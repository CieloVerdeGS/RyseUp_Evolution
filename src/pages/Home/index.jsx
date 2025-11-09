// src/pages/Home/index.jsx
import "./styles.css";
import useScrollToAnchor from "../../router/useScrollToAnchor";

import Hero from "../home/sections/hero/hero";
import WeAre from "../home/sections/weAre/weAre";
import OurValues from "../home/sections/ourValues/ourValues";
import EvolutionAreas from "../home/sections/evolutionAreas/evolutionAreas";
import Challenge from "../home/sections/challenge/challenge";
import History from "../home/sections/history/history";
import BlogAndResources from "../home/sections/blogAndResources/blogAndResources";
import Contact from "../home/sections/contact/contact";
import Footer from "../../components/footer";

const Section = ({ id, children }) => (
  <section id={id} className="snap-section">
    {children}
  </section>
);

export default function Home() {
  useScrollToAnchor();

  return (
    <main className="snap-parent">
      <Section id="inicio"><Hero /></Section>
      <Section id="somos"><WeAre /></Section>
      <Section id="valores"><OurValues /></Section>
      <Section id="areas"><EvolutionAreas /></Section>
      <Section id="desafio"><Challenge /></Section>
      <Section id="historia"><History /></Section>
      <Section id="recursos"><BlogAndResources /></Section>
      <Section id="contacto"><Contact /></Section>

      <section id="footer" className="snap-section footer-section">
        <Footer />
      </section>
    </main>
  );
}
