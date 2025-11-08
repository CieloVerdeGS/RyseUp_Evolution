import { Container, Box, Typography, Grid, Paper, Button } from "@mui/material";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import "./styles.css";

const FEATURES = [
  {
    img: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/meal.svg",
    title: "Plan de Comidas",
    desc: "Recetas fáciles y deliciosas para 21 días",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/dumbbell.svg",
    title: "Entrenamientos",
    desc: "Rutinas guiadas para todos los niveles",
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    title: "Coaching Personal",
    desc: "Asistencia diaria especializada",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/messages.svg",
    title: "Comunidad 24/7",
    desc: "Apoyo y motivación constante",
  },
];

const Challenge = ({ id = "desafio" }) => {
  return (
    <section
      id={id}
      className="section-root challenge-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <Container maxWidth="lg">
        <Box
          className="challenge-card"
          role="region"
          aria-label="Desafío de Transformación de 21 Días"
        >
          <Box className="challenge-header">
            <Typography variant="h4" className="challenge-title title-font" gutterBottom>
              Desafío de Transformación de 21 Días
            </Typography>
            <p className="challenge-subtitle text-font">
              Únete a nuestro programa integral que combina todas las áreas de
              evolución en un plan estructurado de 21 días. Incluye plan de
              comidas, entrenamientos, coaching personal y más.
            </p>
          </Box>

          {/* Features */}
          <Grid container spacing={2} className="features-grid">
            {FEATURES.map((f) => (
              <Grid key={f.title} item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="feature-item">
                  <div className="feature-icon">
                    {f.img ? (
                      <img
                        src={f.img}
                        alt={f.alt || f.title}
                        loading="lazy"
                        className="feature-icon-img"
                      />
                    ) : (
                      f.icon
                    )}
                  </div>
                  <Typography variant="subtitle1" className="feature-title title-font">
                    {f.title}
                  </Typography>
                  <Typography variant="body2" className="feature-desc">
                    {f.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* CTA */}
          <Box className="challenge-cta-wrap">
            <Button
              variant="contained"
              size="large"
              className="challenge-cta  text-font"
              onClick={() =>
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              endIcon={<span style={{ fontWeight: 800, fontSize: 18 }}>→</span>}
            >
              Comenzar Mi Transformación
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Challenge;
