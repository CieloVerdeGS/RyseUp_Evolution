import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

const SLIDES = [
  {
    name: "Roberto Silva",
    role: "Deportista",
    initials: "RS",
    quote:
      "La comunidad es increíble. El apoyo diario y las estrategias de Carol y Daniel me llevaron a competir a nivel nacional. Superé mis límites mentales.",
    achievement: "Competidor nacional de triatlón",
    tags: ["Salud", "Sueños"],
    before: "Deportista amateur sin confianza",
    after: "Atleta de alto rendimiento",
    photos: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521417531039-96c8f2c1555a?w=1200&auto=format&fit=crop",
    ],
  },
  {
    name: "Daniela Torres",
    role: "Emprendedora",
    initials: "DT",
    quote:
      "Aprendí a gestionar mi energía y mi enfoque. Dupliqué ingresos y ahora disfruto el proceso.",
    achievement: "Negocio rentable y sostenible",
    tags: ["Negocios", "Energía"],
    before: "Sin claridad y con estrés",
    after: "Liderazgo auténtico y crecimiento",
    photos: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop",
    ],
  },
  {
    name: "Carlos Pérez",
    role: "Docente",
    initials: "CP",
    quote:
      "Con hábitos simples mejoré mi salud, ánimo y relación con el trabajo.",
    achievement: "Hábitos consistentes 90+ días",
    tags: ["Salud", "Propósito"],
    before: "Cansancio crónico",
    after: "Vitalidad y enfoque diario",
    photos: [
      "https://images.unsplash.com/photo-1544717305-996b815c338c?w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?w=1200&auto=format&fit=crop",
    ],
  },
];

export default function History({ id = "historia" }) {
  const goContact = (e) => {
    e?.preventDefault?.();
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={id}
      className="section-root history-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <Container maxWidth="lg">
        {/* Encabezado */}
        <Box className="history-header">
          <Typography variant="h3" className="history-title title-font" gutterBottom>
            Historias de <span className="accent-gradient">Transformación</span> Real
          </Typography>
          <Typography variant="body1" color="text.secondary" className="history-subtitle text-font">
            Conoce a quienes eligieron evolucionar. Sus historias pueden inspirarte a iniciar la tuya.
          </Typography>
        </Box>

        {/* Controles externos */}
        <Box className="history-controls">
          <button className="nav-btn prev-btn" aria-label="Anterior">
            <ArrowBackRoundedIcon />
          </button>
          <button className="nav-btn next-btn" aria-label="Siguiente">
            <ArrowForwardRoundedIcon />
          </button>
        </Box>

        {/* Slider sin dots */}
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={1}
          spaceBetween={16}
          loop
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          className="history-swiper"
        >
          {SLIDES.map((s) => (
            <SwiperSlide key={s.name}>
              <Card className="testimonial-card" elevation={5}>
                <CardContent className="testimonial-inner" style={{ height: "100%" }}>
                  {/* Col izquierda */}
                  <Box className="person-col">
                    <div className="avatar-gradient title-font" aria-hidden>
                      <span>{s.initials}</span>
                    </div>
                    <Typography variant="h5" className="person-name title-font">
                      {s.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="person-role text-font">
                      {s.role}
                    </Typography>
                    <div className="stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarRoundedIcon key={i} />
                      ))}
                    </div>

                    <Typography className="quote text-font">“{s.quote}”</Typography>

                    <div className="tags">
                      {s.tags.map((t) => (
                        <Chip
                          key={t}
                          size="small"
                          label={t}
                          className="tag-chip text-font"
                          color="success"
                          variant="outlined"
                        />
                      ))}
                    </div>

                    <div className="before-after-mini text-font">
                      <div>
                        <b>Antes:</b> {s.before}
                      </div>
                      <div>
                        <b>Después:</b> {s.after}
                      </div>
                    </div>

                    <Button onClick={goContact} className="hist-cta text-font" variant="contained">
                      Contáctanos
                    </Button>
                  </Box>

                  {/* Col derecha: dos fotos */}
                  <Box className="photos-col">
                    {s.photos.map((src, idx) => (
                      <div className="photo-wrap" key={idx}>
                        <img src={src} alt={`${s.name} foto ${idx + 1}`} loading="lazy" />
                      </div>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA inferior simple */}
        <Box className="cta-simple text-font">
          <Typography variant="h5" className="cta-simple-title title-font">
            ¿Lista para escribir tu historia de éxito?
          </Typography>
          <Button
            onClick={goContact}
            className="cta-simple-btn text-font"
            variant="contained"
          >
            Comparte tu historia de evolución
          </Button>
        </Box>
      </Container>
    </section>
  );
}
