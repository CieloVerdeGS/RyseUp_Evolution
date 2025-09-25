// Blog & Resources section (comentarios en español)
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
} from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import "./styles.css";

// Artículos destacados: imagen, badges, meta, CTA
const ARTICLES = [
  {
    title: "5 Hábitos para Evolucionar tu Energía",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1600&auto=format&fit=crop",
    date: "15 Sept 2024",
    read: "5 min",
    tag: "Salud",
    featured: true,
    excerpt:
      "Descubre los hábitos matutinos que transformarán tu nivel de energía y productividad para toda la vida.",
    href: "#",
    cta: "Leer más",
  },
  {
    title: "Cómo Dar el Siguiente Paso en tu Negocio",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
    date: "12 Sept 2024",
    read: "8 min",
    tag: "Negocios",
    featured: true,
    excerpt:
      "Estrategias probadas para escalar tu emprendimiento y alcanzar el siguiente nivel de éxito profesional.",
    href: "#",
    cta: "Leer más",
  },
  {
    title: "Ejercicios Simples para Evolucionar tu Mente",
    img: "https://images.unsplash.com/photo-1517260911027-2b9e0b98f4f4?q=80&w=1600&auto=format&fit=crop",
    date: "10 Sept 2024",
    read: "6 min",
    tag: "Personal",
    featured: true,
    excerpt:
      "Técnicas de mindfulness y desarrollo personal que puedes implementar hoy mismo para transformar tu mentalidad.",
    href: "#",
    cta: "Leer más",
  },
];

// Recursos gratuitos
const RESOURCES = [
  {
    icon: <DescriptionRoundedIcon />,
    label: "PDF + Videos",
    title: "E-book: Guía Completa de Nutrición",
    desc:
      "Recetas fáciles y deliciosas + videos paso a paso para transformar tu alimentación.",
    color: "#10b76b",
    cta: "Descargar Gratis",
    href: "#",
  },
  {
    icon: <PlayCircleOutlineRoundedIcon />,
    label: "Video Clase",
    title: "Masterclass: Mentalidad de Éxito",
    desc:
      "Sesión exclusiva de 60 minutos sobre cómo desarrollar la mentalidad de un ganador.",
    color: "#f2b400",
    cta: "Descargar Gratis",
    href: "#",
  },
  {
    icon: <FileDownloadRoundedIcon />,
    label: "Templates",
    title: "Plantillas de Planificación",
    desc:
      "Templates descargables para planificar tus objetivos y hacer seguimiento efectivo.",
    color: "#2f82ff",
    cta: "Descargar Gratis",
    href: "#",
  },
];

const BlogAndResources = ({ id = "blog" }) => {
  return (
    <section id={id} className="section-root blog-root" style={{ scrollSnapAlign: "start" }}>
      <Container maxWidth="lg">
        {/* Encabezado principal */}
        <Box className="blog-header">
          <Typography variant="h3" className="blog-title" gutterBottom>
            Blog y <span className="accent-gradient">Recursos</span> Gratuitos
          </Typography>
          <Typography variant="body1" color="text.secondary" className="blog-subtitle">
            Accede a contenido exclusivo, guías prácticas y recursos que te ayudarán a acelerar tu
            proceso de evolución personal y profesional.
          </Typography>
        </Box>

        {/* Subtítulo Artículos */}
        <Box className="section-subtitle">
          <span className="emoji">📚</span>
          <Typography variant="h5" fontWeight={900}>Artículos Destacados</Typography>
        </Box>

        {/* Grid Artículos (divs + CSS grid) */}
        <div className="cards-grid">
          {ARTICLES.map((a) => (
            <article key={a.title} className="cards-item">
              <Card className="post-card" elevation={8}>
                <div className="media-wrap">
                  <CardMedia component="img" className="post-img" src={a.img} alt={a.title} />
                  <Chip
                    size="small"
                    className="tag-chip"
                    label={a.tag}
                    icon={<LocalOfferRoundedIcon />}
                  />
                  {a.featured && <span className="featured-badge">★ Destacado</span>}
                </div>

                <CardContent className="post-body">
                  <Typography variant="h6" fontWeight={900} className="post-title">
                    {a.title}
                  </Typography>

                  <div className="meta">
                    <span><CalendarMonthRoundedIcon /> {a.date}</span>
                    <span><AccessTimeRoundedIcon /> {a.read}</span>
                  </div>

                  <Typography variant="body2" color="text.secondary" className="post-excerpt">
                    {a.excerpt}
                  </Typography>

                  <Button
                    variant="contained"
                    className="post-cta"
                    onClick={() => (window.location.href = a.href)}
                    endIcon={<span style={{ fontWeight: 800 }}>›</span>}
                  >
                    {a.cta}
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Subtítulo Recursos */}
        <Box className="section-subtitle">
          <span className="emoji">🎁</span>
          <Typography variant="h5" fontWeight={900}>Recursos Gratuitos Exclusivos</Typography>
        </Box>

        {/* Grid Recursos */}
        <div className="resources-grid">
          {RESOURCES.map((r) => (
            <div key={r.title} className="resources-item">
              <Card className="res-card" elevation={8}>
                <CardContent className="res-body">
                  <div className="res-icon" style={{ background: `linear-gradient(180deg, ${r.color} 0%, rgba(255,255,255,.85) 130%)` }}>
                    {r.icon}
                  </div>
                  <Chip size="small" label={r.label} className="res-label" />
                  <Typography variant="h6" fontWeight={900} className="res-title">
                    {r.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="res-desc">
                    {r.desc}
                  </Typography>
                  <Button
                    variant="contained"
                    className="res-cta"
                    sx={{ background: r.color, "&:hover": { background: r.color } }}
                    onClick={() => (window.location.href = r.href)}
                  >
                    {r.cta}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Newsletter / CTA grande */}
        <Card className="newsletter-card" elevation={10}>
          <CardContent className="newsletter-inner">
            <Typography variant="h5" fontWeight={900} className="newsletter-title">
              <span className="emoji">📧</span> Suscríbete a Nuestro Newsletter
            </Typography>
            <Typography variant="body1" color="text.secondary" className="newsletter-subtitle">
              Recibe contenido exclusivo, tips semanales y acceso temprano a nuevos recursos directamente
              en tu bandeja de entrada.
            </Typography>

            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <input
                type="email"
                placeholder="Tu mejor email"
                required
                className="newsletter-input"
              />
              <button className="newsletter-btn" type="submit">Suscribirse</button>
            </form>

            <Typography variant="caption" color="text.secondary" className="newsletter-note">
              * No spam. Puedes cancelar cuando quieras.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

export default BlogAndResources;
