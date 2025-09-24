// Challenge — “Desafío de Transformación de 21 Días” (comentarios en español)
import { Container, Box, Typography, Grid, Paper, Button } from "@mui/material";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./styles.css";

const FEATURES = [
  {
    icon: <ReceiptLongOutlinedIcon />,
    title: "Plan de Comidas",
    desc: "Recetas fáciles y deliciosas para 21 días",
  },
  {
    icon: <FitnessCenterOutlinedIcon />,
    title: "Entrenamientos",
    desc: "Rutinas guiadas para todos los niveles",
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    title: "Coaching Personal",
    desc: "Asistencia diaria especializada",
  },
  {
    icon: <ChatBubbleOutlineOutlinedIcon />,
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
        {/* Card grande con degradado */}
        <Box
          className="challenge-card"
          role="region"
          aria-label="Desafío de Transformación de 21 Días"
        >
          {/* Título + subtítulo */}
          <Box className="challenge-header">
            <Typography variant="h4" className="challenge-title" gutterBottom>
              <span className="emoji">🎯</span> Desafío de Transformación de 21
              Días
            </Typography>
            <Typography variant="body1" className="challenge-subtitle">
              Únete a nuestro programa integral que combina todas las áreas de
              evolución en un plan estructurado de 21 días. Incluye plan de
              comidas, entrenamientos, coaching personal y más.
            </Typography>
          </Box>

          {/* Features */}
          <Grid container spacing={2} className="features-grid">
            {FEATURES.map((f) => (
              <Grid key={f.title} item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="feature-item">
                  <div className="feature-icon">{f.icon}</div>
                  <Typography variant="subtitle1" fontWeight={800}>
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
              className="challenge-cta"
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
