import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import "./styles.css";

const RESOURCES = [
  {
    icon: <DescriptionRoundedIcon />,
    label: "PDF + Videos",
    title: "E-book: Guía Completa de Nutrición",
    desc: "Recetas fáciles y deliciosas + videos paso a paso para transformar tu alimentación.",
    color: "#10b76b",
    cta: "Descargar Gratis",
    href: "#",
  },
  {
    icon: <PlayCircleOutlineRoundedIcon />,
    label: "Video Clase",
    title: "Masterclass: Mentalidad de Éxito",
    desc: "Sesión exclusiva de 60 minutos sobre cómo desarrollar la mentalidad de un ganador.",
    color: "#f2b400",
    cta: "Descargar Gratis",
    href: "#",
  },
  {
    icon: <FileDownloadRoundedIcon />,
    label: "Templates",
    title: "Plantillas de Planificación",
    desc: "Templates descargables para planificar tus objetivos y hacer seguimiento efectivo.",
    color: "#2f82ff",
    cta: "Descargar Gratis",
    href: "#",
  },
];

const BlogAndResources = ({ id = "blog" }) => {
  return (
    <section
      id={id}
      className="section-root blog-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <Container maxWidth="lg">
        {/* Encabezado principal */}
        <Box className="blog-header">
          <Typography variant="h3" className="blog-title" gutterBottom>
            <span className="accent-gradient">Recursos</span> Gratuitos
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="blog-subtitle"
          >
            Accede a contenido exclusivo, guías prácticas y recursos que te
            ayudarán a acelerar tu proceso de evolución personal y profesional.
          </Typography>
        </Box>

        {/* Subtítulo Recursos */}
        <Box className="section-subtitle">
          <span className="emoji">🎁</span>
          <Typography variant="h5" fontWeight={900}>
            Recursos Gratuitos Exclusivos
          </Typography>
        </Box>

        {/* Grid Recursos */}
        <div className="resources-grid">
          {RESOURCES.map((r) => (
            <div key={r.title} className="resources-item">
              <Card className="res-card" elevation={8}>
                <CardContent className="res-body">
                  <div
                    className="res-icon"
                    style={{
                      background: `linear-gradient(180deg, ${r.color} 0%, rgba(255,255,255,.85) 130%)`,
                    }}
                  >
                    {r.icon}
                  </div>
                  <Chip size="small" label={r.label} className="res-label" />
                  <Typography
                    variant="h6"
                    fontWeight={900}
                    className="res-title"
                  >
                    {r.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="res-desc"
                  >
                    {r.desc}
                  </Typography>
                  <Button
                    variant="contained"
                    className="res-cta"
                    sx={{
                      background: r.color,
                      "&:hover": { background: r.color },
                    }}
                    onClick={() => (window.location.href = r.href)}
                  >
                    {r.cta}
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

export default BlogAndResources;
