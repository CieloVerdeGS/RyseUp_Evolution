// src/pages/Home/sections/weAre/weAre.jsx
import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import "./styles.css";

const WeAre = ({ id = "somos" }) => {
  return (
    <section id={id} className="section-root weare-root" style={{ scrollSnapAlign: "start" }}>
      <Container maxWidth="lg">
        <div
          className="weare-container"
        >
          {/* Columna imagen */}
          <div>
            <Box className="weare-media">
              <img
                src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1600&auto=format&fit=crop"
                alt="Entrenador asistiendo a una atleta en prensa de piernas"
                className="weare-img"
                loading="lazy"
              />
              <span className="decoration deco-1" />
              <span className="decoration deco-2" />
            </Box>
          </div>

          {/* Columna texto */}
          <div>
            <Box className="weare-copy">
              <Typography component="h2" className="weare-title" gutterBottom>
                Somos Carol y Daniel, y decidimos <span className="accent-gradient">no conformarnos</span>
              </Typography>

              <Typography variant="body1" color="text.secondary" paragraph>
                Hace años éramos como muchas personas: vivíamos en piloto automático, sintiendo que había
                algo más esperándonos, pero no sabíamos cómo alcanzarlo.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Un día decidimos que era hora de evolucionar. Comenzamos nuestro viaje de transformación
                personal y descubrimos que el verdadero cambio viene de adentro, pero se potencia con la
                comunidad correcta.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Hoy, después de transformar nuestras propias vidas, hemos dedicado nuestra misión a ayudar
                a miles de personas a encontrar su mejor versión. Porque creemos que todos merecen vivir
                una vida extraordinaria.
              </Typography>

              <Paper elevation={0} className="mission-card">
                <Typography variant="h5" className="mission-title" gutterBottom>
                  Nuestra Misión
                </Typography>
                <Typography variant="body1" className="mission-text">
                  Empoderar a las personas para que descubran su <b>potencial ilimitado</b>, construyan la
                  <b> vida que realmente desean</b> y se conviertan en la <b>inspiración</b> que el mundo necesita.
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
