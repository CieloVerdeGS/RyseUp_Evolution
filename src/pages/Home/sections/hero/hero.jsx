import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import "./styles.css";

const STATS = [
  { value: "10,000+", label: "Vidas transformadas" },
  { value: "500K+", label: "Metas alcanzadas" },
  { value: "95%", label: "Tasa de éxito" },
];

const Hero = ({ id }) => {
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
          <Typography variant="h2" className="hero-eyebrow" gutterBottom>
            <span className="brand-gradient to-uppercase">
              Rise Up Evolution
            </span>
          </Typography>

          <p component="h1" className="hero-title roboto" gutterBottom>
            La evolución comienza{" "}
            <span className="accent-gradient">contigo</span>
          </p>

          <p className="hero-subtitle vm-20 roboto">
            Transforma tu vida, alcanza tus sueños y conviértete en la mejor
            versión de ti mismo. Únete a nuestra comunidad de personas que
            decidieron no conformarse.
          </p>

          <Box className="hero-ctas">
            <Button
              variant="contained"
              size="large"
              className="cta-primary"
              endIcon={<ArrowForwardRoundedIcon />}
              href="#contacto"
            >
              Quiero empezar mi evolución
            </Button>

            <Button
              variant="outlined"
              size="large"
              className="cta-secondary"
              startIcon={<PlayCircleOutlineRoundedIcon />}
              href="#historia"
            >
              Ver nuestra historia
            </Button>
          </Box>
          {/* <Grid
            container
            spacing={3}
            className="stats-wrap"
            justifyContent={"center"}
          >
            {STATS.map((s) => (
              <Grid key={s.label} item xs={12} md={4}>
                <Card elevation={8} className="stat-card">
                  <CardContent className="stat-content">
                    <Typography className="stat-value">{s.value}</Typography>
                    <Typography color="text.secondary" className="stat-label">
                      {s.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid> */}
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
