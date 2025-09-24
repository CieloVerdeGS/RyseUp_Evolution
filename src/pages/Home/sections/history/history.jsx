// History (Testimonials) con Swiper (comentarios en español)
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

const SLIDES = [
  {
    name: "Roberto Silva",
    role: "Deportista",
    initials: "RS",
    quote:
      "La comunidad es increíble. El apoyo diario y las estrategias de Carol y Daniel me llevaron a competir a nivel nacional. Superé todos mis límites mentales.",
    achievement: "Competidor nacional de triatlón",
    tags: ["Salud", "Sueños"],
    before: "Deportista amateur sin confianza",
    after: "Atleta de alto rendimiento",
  },
  {
    name: "Daniela Torres",
    role: "Emprendedora",
    initials: "DT",
    quote:
      "Aprendí a gestionar mi energía y mi enfoque. Pasé de sentirme estancada a duplicar mis ingresos y disfrutar el proceso.",
    achievement: "Negocio rentable y sostenible",
    tags: ["Negocios", "Energía"],
    before: "Sin claridad y con estrés",
    after: "Liderazgo auténtico y crecimiento",
  },
  {
    name: "Carlos Pérez",
    role: "Docente",
    initials: "CP",
    quote:
      "Desarrollé hábitos simples que cambiaron mi día. Mejoré mi salud, mi estado de ánimo y mi relación con el trabajo.",
    achievement: "Hábitos consistentes 90+ días",
    tags: ["Salud", "Propósito"],
    before: "Cansancio crónico",
    after: "Vitalidad y enfoque diario",
  },
];

const History = ({ id = "historia" }) => {
  return (
    <section
      id={id}
      className="section-root history-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <Container maxWidth="lg">
        {/* Encabezado */}
        <Box className="history-header">
          <Typography variant="h3" className="history-title" gutterBottom>
            Historias de <span className="accent-gradient">Transformación</span>{" "}
            Real
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="history-subtitle"
          >
            Conoce a las personas que decidieron evolucionar y ahora viven la
            vida de sus sueños. Sus historias pueden ser la inspiración que
            necesitas para comenzar tu propia transformación.
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

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={16}
          loop
          a11y={{ prevSlideMessage: "Anterior", nextSlideMessage: "Siguiente" }}
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          pagination={{ clickable: true, el: ".history-dots" }}
          className="history-swiper"
        >
          {SLIDES.map((s) => (
            <SwiperSlide key={s.name}>
              <Card className="testimonial-card" elevation={6}>
                <CardContent className="testimonial-inner">
                  {/* Columna izquierda: persona */}
                  <Box className="person-col">
                    <div className="avatar-gradient">
                      <span>{s.initials}</span>
                    </div>

                    <Typography
                      variant="h5"
                      fontWeight={900}
                      className="person-name"
                    >
                      {s.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="person-role"
                    >
                      {s.role}
                    </Typography>

                    <div className="stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarRoundedIcon key={i} />
                      ))}
                    </div>

                    <div className="tags">
                      {s.tags.map((t) => (
                        <Chip
                          key={t}
                          size="small"
                          label={t}
                          className="tag-chip"
                          color="success"
                          variant="outlined"
                        />
                      ))}
                    </div>
                  </Box>

                  {/* Columna derecha: quote + bloques */}
                  <Box className="content-col">
                    <Typography className="quote">“{s.quote}”</Typography>

                    <Box className="highlight">
                      <EmojiEventsRoundedIcon className="highlight-icon" />
                      <div>
                        <strong>Logro Principal:</strong>
                        <div>{s.achievement}</div>
                      </div>
                    </Box>

                    <Box className="before-after">
                      <Card variant="outlined" className="ba-card ba-before">
                        <CardContent>
                          <Typography className="ba-title ba-title--before">
                            Antes:
                          </Typography>
                          <Typography variant="body2">{s.before}</Typography>
                        </CardContent>
                      </Card>

                      <Card variant="outlined" className="ba-card ba-after">
                        <CardContent>
                          <Typography className="ba-title ba-title--after">
                            Después:
                          </Typography>
                          <Typography variant="body2">{s.after}</Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots */}
        <div className="history-dots" />

        {/* Métricas + CTA grande */}
        <Box className="history-stats-cta">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-value">10K+</div>
              <div className="stat-label">Miembros Activos</div>
            </div>
            <div className="stat">
              <div className="stat-value">95%</div>
              <div className="stat-label">Completaron el Desafío</div>
            </div>
            <div className="stat">
              <div className="stat-value">150+</div>
              <div className="stat-label">Países Representados</div>
            </div>
            <div className="stat">
              <div className="stat-value">
                4.9<span className="star">★</span>
              </div>
              <div className="stat-label">Calificación Promedio</div>
            </div>
          </div>

          <Card className="cta-banner" elevation={8}>
            <CardContent className="cta-inner">
              <Typography variant="h4" className="cta-title">
                ¿Lista para escribir tu historia de éxito?
              </Typography>
              <Typography variant="body1" className="cta-subtitle">
                Únete a nuestra comunidad de evolución y comienza tu
                transformación hoy. Miles de personas ya lo hicieron, ¡ahora es
                tu turno!
              </Typography>

              <div className="cta-actions">
                <a href="#contacto" className="cta-btn">
                  Comparte tu historia de evolución
                </a>
                <a href="#contacto" className="cta-input-mock" aria-disabled>
                  {/* placeholder visual tipo input */}
                </a>
              </div>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </section>
  );
};

export default History;
