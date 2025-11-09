import { Container, Box, Typography, Grid, Paper, Button } from "@mui/material";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import "./styles.css";

const FEATURES = [
  {
    img: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/meal.svg",
    bg: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
    title: "Plan de Comidas",
    desc: "Recetas fáciles y deliciosas para 21 días",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/dumbbell.svg",
    bg: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
    title: "Entrenamientos",
    desc: "Rutinas guiadas para todos los niveles",
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    bg: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
    title: "Coaching Personal",
    desc: "Asistencia diaria especializada",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/messages.svg",
    bg: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
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
            <Typography
              variant="h4"
              className="challenge-title title-font"
              gutterBottom
            >
              Desafío de Transformación de 21 Días
            </Typography>
            <p className="challenge-subtitle text-font">
              Únete a nuestro programa integral que combina todas las áreas de
              evolución en un plan estructurado de 21 días. Incluye plan de
              comidas, entrenamientos, coaching personal y más.
            </p>
          </Box>

          <Grid container spacing={2} className="features-grid">
            {FEATURES.map((f) => (
              <Grid key={f.title} item xs={12} sm={6} md={3}>
                <Paper
                  elevation={0}
                  className="feature-item with-bg"
                  style={{ backgroundImage: `url(${f.bg})` }}
                >
                  <div className="feature-overlay" />
                  <div className="feature-content">
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
                    <Typography
                      variant="subtitle1"
                      className="feature-title title-font"
                    >
                      {f.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="feature-desc text-font"
                    >
                      {f.desc}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box className="challenge-cta-wrap">
            <Button
              variant="contained"
              size="large"
              className="challenge-cta text-font br-30"
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
