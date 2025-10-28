import { Container, Box, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import "./styles.css";

const Hero = ({ id }) => {

    const handleNavClick = (href) => (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };


  return (
    <section
      id={id}
      className="section-root hero-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <Container maxWidth="lg" className="hero-container">
        <Box className="hero-content">
          <Typography variant="h2" className="hero-eyebrow title-font" gutterBottom>
            <span className="brand-gradient to-uppercase">
              Rise Up Evolution
            </span>
          </Typography>

          <h1 className="hero-title title-font">
            La evolución comienza{" "}
            <span className="accent-gradient">contigo</span>
          </h1>

          <p className="hero-subtitle text-font ">
            Transforma tu vida, alcanza tus sueños y conviértete en la mejor
            versión de ti mismo. Únete a nuestra comunidad de personas que
            decidieron no conformarse.
          </p>
          <p className="hero-subtitle m-0 text-font ">
            En colaboracion con <b>WeDoTransformations</b>
          </p>
          <img
            src="/images/WeDoTransformations.png"
            alt="WeDoTransformations"
            className="WeDoTransformations-img"
          />

          <div className="hero-ctas">
            <button onClick={handleNavClick("#contacto")} type="button" className="cta-btn-green text-font ">
              <span>Quiero empezar mi evolución</span>
              <ArrowForwardRoundedIcon className="cta-icon" />
            </button>

            <button type="button" className="cta-btn-white text-font ">
              <span>Resultados</span>
            </button>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
