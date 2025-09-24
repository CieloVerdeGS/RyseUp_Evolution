// EvolutionAreas — divs + CSS (comentarios en español)
import {
  Container,
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import "./styles.css";

const AREAS = [
  {
    key: "wellness",
    title: "Salud y Bienestar",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1600&auto=format&fit=crop",
    color: "#13b15a",
    ctaColor: "#12b159",
    ctaText: "Explorar Salud y Bienestar",
    icon: <RestaurantRoundedIcon />,
    bullets: ["Nutrición personalizada", "Rutinas de ejercicio efectivas", "Mindfulness y bienestar mental"],
  },
  {
    key: "business",
    title: "Negocios",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
    color: "#f2b400",
    ctaColor: "#f2b400",
    ctaText: "Explorar Negocios",
    icon: <BusinessCenterRoundedIcon />,
    bullets: ["Estrategias de networking", "Liderazgo auténtico", "Crecimiento empresarial"],
  },
  {
    key: "spiritual",
    title: "Personal y Espiritual",
    img: "https://images.unsplash.com/photo-1494797710133-75ad3b87a5f2?q=80&w=1600&auto=format&fit=crop",
    color: "#bb39ff",
    ctaColor: "#d240ff",
    ctaText: "Explorar Personal y Espiritual",
    icon: <AutoAwesomeRoundedIcon />,
    bullets: ["Autoconocimiento profundo", "Prácticas espirituales", "Conexión con propósito"],
  },
  {
    key: "dreams",
    title: "Sueños",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop",
    color: "#3487ff",
    ctaColor: "#2f82ff",
    ctaText: "Explorar Sueños",
    icon: <RocketLaunchRoundedIcon />,
    bullets: ["Claridad en objetivos", "Planificación estratégica", "Celebración de logros"],
  },
];

const EvolutionAreas = ({ id = "areas" }) => {
  return (
    <section id={id} className="section-root areas-root" style={{ scrollSnapAlign: "start" }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <Box className="areas-header">
          <Typography variant="h3" className="areas-title" gutterBottom>
            Áreas de <span className="accent-gradient">Evolución</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" className="areas-subtitle">
            Desarrollamos un enfoque integral que abarca todas las dimensiones de tu vida.
            Porque la verdadera evolución sucede cuando trabajas en todos los aspectos de tu ser.
          </Typography>
        </Box>

        {/* 👇 Layout con divs */}
        <div className="areas-grid">
          {AREAS.map((a) => (
            <div key={a.key} className="areas-item">
              <Card className="area-card" elevation={6}>
                <CardActionArea
                  onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Box className="media-wrap">
                    <CardMedia component="img" src={a.img} alt={a.title} className="area-media" />
                    <span className="corner-shape" style={{ background: a.color }} />
                    <Chip
                      icon={a.icon}
                      label={a.title}
                      className="area-badge"
                      sx={{ bgcolor: "rgba(0,0,0,0.4)", color: "#fff", "& .MuiChip-icon": { color: "#fff" } }}
                    />
                  </Box>
                </CardActionArea>

                <CardContent className="area-content">
                  <Typography variant="body1" color="text.secondary" mb={1.5}>
                    {a.key === "wellness" &&
                      "Transforma tu cuerpo y mente con hábitos saludables que perduran. Descubre el poder de una vida equilibrada."}
                    {a.key === "business" &&
                      "Desarrolla las habilidades y mentalidad necesarias para crear el éxito profesional que deseas."}
                    {a.key === "spiritual" &&
                      "Conecta con tu esencia más profunda y desarrolla la sabiduría interior que te guiará hacia tu propósito."}
                    {a.key === "dreams" &&
                      "Convierte tus sueños más grandes en realidad con estrategias probadas y el mindset correcto."}
                  </Typography>

                  <List dense disablePadding className="area-bullets">
                    {a.bullets.map((b, idx) => (
                      <ListItem key={idx} disableGutters className="area-bullet-item">
                        <ListItemIcon className="area-bullet-icon">
                          <FiberManualRecordRoundedIcon sx={{ fontSize: 10, color: a.color }} />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={b} />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant="contained"
                    size="large"
                    className="area-cta"
                    sx={{ bgcolor: a.ctaColor, "&:hover": { bgcolor: a.ctaColor } }}
                    onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                    endIcon={<span style={{ fontWeight: 800, fontSize: 18 }}>→</span>}
                  >
                    {a.ctaText}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EvolutionAreas;
