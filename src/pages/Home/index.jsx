 import Hero from "./sections/hero/hero";
import WeAre from "./sections/weAre/weAre";
import OurValues from "./sections/ourValues/ourValues";
import EvolutionAreas from "./sections/evolutionAreas/evolutionAreas";
import Challenge from "./sections/challenge/challenge";
import History from "./sections/history/history";
import BlogAndResources from "./sections/blogAndResources/blogAndResources";
import Contact from "./sections/contact/contact";
import CalculatorEmbed from "../../components/calculator/calculatorEmbed";
import Footer from "../../components/footer";
import "./styles.css";

const Section = ({ id, children }) => (
  <section id={id} className="snap-section">
    {children}
  </section>
);

export default function Home() {
  return (
    <main className="snap-parent">
      <Section id="inicio"><Hero /></Section>
      <Section id="somos"><WeAre /></Section>
      <Section id="valores"><OurValues /></Section>
      <Section id="areas"><EvolutionAreas /></Section>
      <Section id="desafio"><Challenge /></Section>
      <Section id="calculadora"><CalculatorEmbed /></Section>
      <Section id="historia"><History /></Section>
      <Section id="blog"><BlogAndResources /></Section>
      <Section id="contacto"><Contact /></Section>
      {/* <Section id="contacto"><Footer /></Section> */}
           <section id="footer" className="snap-section footer-section">
        <Footer />
      </section>
    </main>
  );
}
