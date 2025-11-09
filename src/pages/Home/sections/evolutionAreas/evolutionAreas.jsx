// src/pages/home/sections/evolutionAreas/EvolutionAreas.jsx
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import "./styles.css";

const AREAS = [
  { key: "wellness", title: "Salud y Bienestar", url: "/salud-y-bienestar",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1600&auto=format&fit=crop",
    color: "#13b15a", ctaText: "Explorar Salud y Bienestar", icon: <RestaurantRoundedIcon />,
    bullets: ["Nutrición personalizada","Rutinas de ejercicio efectivas","Mindfulness y bienestar mental"] },
  { key: "business", title: "Negocios", url: "/negocios",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
    color: "#f2b400", ctaText: "Explorar Negocios", icon: <BusinessCenterRoundedIcon />,
    bullets: ["Estrategias de networking","Liderazgo auténtico","Crecimiento empresarial"] },
  { key: "spiritual", title: "Personal y Espiritual", url: "/personal-y-espiritual",
    img: "https://images.unsplash.com/photo-1494797710133-75ad3b87a5f2?q=80&w=1600&auto=format&fit=crop",
    color: "#bb39ff", ctaText: "Explorar Personal y Espiritual", icon: <AutoAwesomeRoundedIcon />,
    bullets: ["Autoconocimiento profundo","Prácticas espirituales","Conexión con propósito"] },
  { key: "dreams", title: "Sueños", url: "/suenos",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop",
    color: "#3487ff", ctaText: "Explorar Sueños", icon: <RocketLaunchRoundedIcon />,
    bullets: ["Claridad en objetivos","Planificación estratégica","Celebración de logros"] },
];

export default function EvolutionAreas({ id = "areas" }) {
  const navigate = useNavigate();

  const goToAreaPage = (areaKey) => () => {
    // 👉 navega a /areas-de-evolucion con ?area=<key>
    navigate(`/areas-de-evolucion?area=${encodeURIComponent(areaKey)}`);
  };

  return (
    <section id={id} className="section-root areas-root" style={{ scrollSnapAlign: "start" }}>
      <Container maxWidth="lg">
        <Box className="values-header">
          <Typography variant="h3" className="values-title title-font" gutterBottom>
            Nuestros <span className="accent-gradient">Valores</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" className="values-subtitle text-font">
            Estos principios guían cada decisión que tomamos y cada paso que damos en nuestro camino hacia la evolución.
          </Typography>
        </Box>

        <div className="areas-grid mb-80">
          {AREAS.map((a) => (
            <div key={a.key} className="areas-item">
              <div className="area-card" elevation={6}>
                <CardActionArea onClick={goToAreaPage(a.key)}>
                  <Box className="media-wrap">
                    <CardMedia component="img" src={a.img} alt={a.title} className="area-media text-font" />
                    <span className="corner-shape text-font" style={{ background: a.color }} />
                    <Chip
                      icon={a.icon}
                      label={a.title}
                      className="area-badge text-font"
                      sx={{ bgcolor: "rgba(0,0,0,0.4)", color: "#fff", "& .MuiChip-icon": { color: "#fff" } }}
                    />
                  </Box>
                </CardActionArea>

                <CardContent className="area-content">
                  <p className="text-font" style={{ marginBottom: 12 }}>
                    {a.key === "wellness" && "Transforma tu cuerpo y mente con hábitos saludables que perduran. Descubre el poder de una vida equilibrada."}
                    {a.key === "business" && "Desarrolla las habilidades y mentalidad necesarias para crear el éxito profesional que deseas."}
                    {a.key === "spiritual" && "Conecta con tu esencia más profunda y desarrolla la sabiduría interior que te guiará hacia tu propósito."}
                    {a.key === "dreams" && "Convierte tus sueños más grandes en realidad con estrategias probadas y el mindset correcto."}
                  </p>

                  <ul className="area-bullets text-font">
                    {a.bullets.map((b, idx) => (
                      <li key={idx} className="area-bullet-item text-font">
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="area-cta text-font" style={{ "--area-color": a.color }} onClick={goToAreaPage(a.key)}>
                    {a.ctaText}
                  </div>
                </CardContent>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
