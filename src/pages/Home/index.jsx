// Home sin contenedor con overflow (comentarios en español)
import { Fragment } from "react";
import Hero from "./sections/hero/hero";
import WeAre from "./sections/weAre/weAre";
import OurValues from "./sections/ourValues/ourValues";
import EvolutionAreas from "./sections/evolutionAreas/evolutionAreas";
import Challenge from "./sections/challenge/challenge";
import History from "./sections/history/history";
import BlogAndResources from "./sections/blogAndResources/blogAndResources";
import Contact from "./sections/contact/contact";
import "./styles.css";
import CalculatorEmbed from "../../components/calculator/calculatorEmbed";

export default function Home() {
  return (
    <Fragment>
      <Hero id="inicio" />
      <WeAre id="somos" />
      <OurValues id="valores" />
      <EvolutionAreas id="areas" />
      <Challenge id="desafio" />
      <CalculatorEmbed id="calculadora" />
      <History id="historia" />
      <BlogAndResources id="blog" />
      <Contact id="contacto" />
    </Fragment>
  );
}
