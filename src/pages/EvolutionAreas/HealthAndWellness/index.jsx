import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Button } from "@mui/material";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";

// 👇 MUY IMPORTANTE: importa el CSS de esta sección
import "./styles.css";

export default function HealthAndWellness() {
  const navigate = useNavigate();

  const scrollToSection = useCallback((id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleStart = () => {
    scrollToSection("#health-details");
  };

  const handleBack = () => {
    // puedes cambiarlo por navigate("/", { state: { anchor: "areas" } });
    navigate(-1);
  };

  const handleContact = () => {
    scrollToSection("#contacto");
  };

  return (
    <div className="health-page">
      <Box className="health-hero">
        <div className="health-hero-bg" />

        <Box className="health-hero-overlay">
          <Box className="health-hero-content">
            <div className="health-pill text-font">
              <FavoriteBorderRoundedIcon className="health-pill-ico" />
              <span>Salud y Bienestar</span>
            </div>

            <Typography
              variant="h4"
              className="health-hero-title title-font"
              gutterBottom
            >
              Tu Cuerpo es el Templo de tu Evolución
            </Typography>

            <Typography variant="body1" className="health-hero-sub text-font">
              Transforma tu salud con nuestro programa integral de nutrición,
              ejercicio y bienestar mental.
            </Typography>

            <Box className="health-hero-actions">
              <Button
                variant="contained"
                className="health-btn-primary text-font "
                sx={{
                  borderRadius: "20px",
                }}
                onClick={handleStart}
              >
                Comenzar Ahora
              </Button>

              <Button
                variant="contained"
                className="health-btn-secondary text-font"
                  sx={{
                  borderRadius: "20px",
                }}
                onClick={handleBack}
              >
                Volver
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* BLOQUE INFERIOR */}
      <Box id="health-details" className="health-section">
        <Box className="health-section-header">
          <Typography variant="h4" className="health-section-eyebrow text-font" mb={2}>
            <b>
              Transforma tu Salud
              </b>
          </Typography>

          <Typography variant="body1" className="health-section-text text-font" mb={2}>
            Tu salud es la base de todo. Sin energía y vitalidad, es imposible
            alcanzar tus sueños. Te acompañamos en el camino hacia tu mejor
            versión física y mental.
          </Typography>
        </Box>

        {/* Cuatro “burbujas” */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          className="health-features-grid"
        >
          <Grid item xs={12} sm={6} md={3}>
            <Box className="health-feature">
              <div className="health-icon-circle">
                <FavoriteRoundedIcon />
              </div>
              <Typography
                className="health-feature-title title-font"
                gutterBottom
              >
                Salud Integral
              </Typography>
              <Typography
                className="health-feature-text text-font"
                color="text.secondary"
              >
                Cuida tu cuerpo, mente y espíritu.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box className="health-feature">
              <div className="health-icon-circle">
                <RestaurantRoundedIcon />
              </div>
              <Typography
                className="health-feature-title title-font"
                gutterBottom
              >
                Nutrición
              </Typography>
              <Typography
                className="health-feature-text text-font"
                color="text.secondary"
              >
                Planes personalizados y sostenibles.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box className="health-feature">
              <div className="health-icon-circle">
                <FitnessCenterRoundedIcon />
              </div>
              <Typography
                className="health-feature-title title-font"
                gutterBottom
              >
                Fitness
              </Typography>
              <Typography
                className="health-feature-text text-font"
                color="text.secondary"
              >
                Rutinas adaptadas a tu nivel.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box className="health-feature">
              <div className="health-icon-circle">
                <BoltRoundedIcon />
              </div>
              <Typography
                className="health-feature-title title-font"
                gutterBottom
              >
                Energía
              </Typography>
              <Typography
                className="health-feature-text text-font"
                color="text.secondary"
              >
                Incrementa tu vitalidad diaria.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* CTA inferior */}
        <Box className="health-cta">
          <Button
            variant="contained"
            className="health-cta-btn text-font"
            onClick={handleContact}
              sx={{
                  borderRadius: "20px",
                }}
          >
            Contáctanos
          </Button>
        </Box>
      </Box>
    </div>
  );
}
