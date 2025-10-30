import { Container, Box, Typography, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./styles.css";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1600&auto=format&fit=crop",
    alt: "Entrenador asistiendo a una atleta en prensa de piernas",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
    alt: "Atleta en entrenamiento de fuerza",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop",
    alt: "Entrenamiento funcional en grupo",
  },
];

const WeAre = ({ id = "somos" }) => {
  return (
    <section
      id={id}
      className="section-root weare-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <Container maxWidth="lg">
        <div className="weare-container">
          <div>
            <Box className="weare-media">
              <Swiper
                className="weare-swiper"
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop
                speed={900}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                allowTouchMove={true}  
              >
                {SLIDES.map((s, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="weare-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <span className="decoration deco-1" />
              <span className="decoration deco-2" />
            </Box>
          </div>
          <div>
            <Box className="weare-copy">
              <Typography component="h2" className="weare-title title-font" gutterBottom>
                Somos Carol y Daniel, y decidimos{" "}
                <span className="accent-gradient">no conformarnos</span>
              </Typography>
              <Typography
                variant="body1"
                className="weare-text roboto"
                color="text.secondary"
                paragraph
              >
                Hace años éramos como muchas personas: vivíamos en piloto automático,
                sintiendo que había algo más esperándonos, pero no sabíamos cómo
                alcanzarlo.
              </Typography>
              <Typography
                variant="body1"
                className="weare-text roboto"
                color="text.secondary"
                paragraph
              >
                Un día decidimos que era hora de evolucionar. Comenzamos nuestro viaje de
                transformación personal y descubrimos que el verdadero cambio viene de
                adentro, pero se potencia con la comunidad correcta.
              </Typography>
              <Typography
                variant="body1"
                className="weare-text roboto"
                color="text.secondary"
                paragraph
              >
                Hoy, después de transformar nuestras propias vidas, hemos dedicado
                nuestra misión a ayudar a miles de personas a encontrar su mejor
                versión. Porque creemos que todos merecen vivir una vida extraordinaria.
              </Typography>

              <Paper elevation={0} className="mission-card">
                <Typography variant="h5" className="mission-title title-font" gutterBottom>
                  Nuestra Misión
                </Typography>
                <Typography variant="body1" className="weare-text mission-text color_white text-font">
                  Empoderar a las personas para que descubran su <b>potencial ilimitado</b>,
                  construyan la <b>vida que realmente desean</b> y se conviertan en la{" "}
                  <b>inspiración</b> que el mundo necesita.
                </Typography>
              </Paper>
            </Box>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeAre;
