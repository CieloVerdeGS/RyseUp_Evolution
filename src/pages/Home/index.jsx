import { Box } from "@mui/material";
import Hero from "./sections/hero/hero";
import WeAre from "./sections/weAre/weAre";
import OurValues from "./sections/ourValues/ourValues";
import History from "./sections/history/history";
import EvolutionAreas from "./sections/evolutionAreas/evolutionAreas";
import Challenge from "./sections/challenge/challenge";
import BlogAndResources from "./sections/blogAndResources/blogAndResources";
import Contact from "./sections/contact/contact";
import "./styles.css";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
        paddingTop: "76px",
      }}
    >
      <Hero id="inicio" />
      <WeAre id="somos" />
      <OurValues id="valores" />
      <EvolutionAreas id="areas" />
      <Challenge id="desafio" />
      <History id="historia" />
      <BlogAndResources id="blog" />
      <Contact id="contacto" />
    </Box>
  );
};

export default Home;
