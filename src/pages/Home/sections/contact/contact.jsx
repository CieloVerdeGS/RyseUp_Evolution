// Contact section (comentarios en español)
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MovieFilterRounded"; // placeholder para TikTok
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import "./styles.css";

const socials = [
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    user: "@riseupevolution",
    stat: "50K+",
    statLabel: "seguidores",
    desc: "Inspiración diaria y tips",
    color: "#c13584",
  },
  {
    icon: <TikTokIcon />,
    name: "TikTok",
    user: "@riseupevolution",
    stat: "120K+",
    statLabel: "seguidores",
    desc: "Videos motivacionales",
    color: "#000000",
  },
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    user: "Rise Up Evolution",
    stat: "35K+",
    statLabel: "seguidores",
    desc: "Comunidad y eventos",
    color: "#1877f2",
  },
  {
    icon: <YouTubeIcon />,
    name: "YouTube",
    user: "Rise Up Evolution",
    stat: "25K+",
    statLabel: "seguidores",
    desc: "Masterclasses completas",
    color: "#ff0000",
  },
];

const Contact = ({ id = "contacto" }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: conecta con tu API o servicio (EmailJS, backend, etc.)
    alert("¡Gracias! Te contactaremos pronto.");
  };

  return (
    <section
      id={id}
      className="section-root contact-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="contact-header">
          <Typography variant="h3" className="contact-title" gutterBottom>
            Conéctate con{" "}
            <span className="accent-gradient">Rise Up Evolution</span>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="contact-subtitle"
          >
            Estamos aquí para apoyarte en cada paso de tu evolución. Conéctate
            con nosotros y únete a una comunidad que celebra el crecimiento y la
            transformación.
          </Typography>
        </Box>

        {/* Layout principal */}
        <div className="contact-grid">
          {/* Columna izquierda: formulario */}
          <Card className="form-card" elevation={8}>
            <CardContent>
              <Typography variant="h5" fontWeight={900} gutterBottom>
                ¿Listo para comenzar tu evolución?
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Cuéntanos sobre ti y cómo podemos ayudarte a alcanzar tus
                objetivos
              </Typography>

              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-row two">
                  <TextField
                    label="Nombre"
                    name="firstName"
                    required
                    fullWidth
                  />
                  <TextField
                    label="Apellido"
                    name="lastName"
                    required
                    fullWidth
                  />
                </div>

                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  required
                  fullWidth
                />

                <TextField
                  label="Teléfono (opcional)"
                  name="phone"
                  fullWidth
                  inputProps={{ inputMode: "tel" }}
                />

                <TextField
                  label="¿Cuáles son tus principales objetivos?"
                  name="goals"
                  multiline
                  rows={3}
                  fullWidth
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className="submit-btn"
                >
                  Quiero ser parte de Rise Up Evolution
                </Button>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mt={1}
                >
                  Al enviar este formulario, aceptas recibir comunicaciones de
                  Rise Up Evolution. Tu información está segura con nosotros.
                </Typography>
              </form>
            </CardContent>
          </Card>

          {/* Columna derecha: redes + info */}
          <div className="right-col">
            {/* Grid redes */}
            <div className="socials-grid">
              {socials.map((s) => (
                <Card key={s.name} className="social-card" elevation={6}>
                  <CardContent className="social-card-inner">
                    <div className="social-icon" style={{ color: s.color }}>
                      {s.icon}
                    </div>
                    <Typography variant="subtitle1" fontWeight={900}>
                      {s.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="social-user"
                    >
                      {s.user}
                    </Typography>
                    <div className="social-stat">
                      <span className="value">{s.stat}</span>{" "}
                      <span>{s.statLabel}</span>
                    </div>
                    <Typography variant="caption" color="text.secondary">
                      {s.desc}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tarjeta información de contacto */}
            <Card className="info-card" elevation={8}>
              <CardContent className="info-inner">
                <Typography variant="h6" className="info-title">
                  <span role="img" aria-label="phone">
                    📞
                  </span>{" "}
                  Información de Contacto
                </Typography>

                <div className="info-row">
                  <div className="info-ico">
                    <MailOutlineRoundedIcon />
                  </div>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">hola@riseupevolution.com</div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-ico">
                    <PhoneIphoneRoundedIcon />
                  </div>
                  <div>
                    <div className="info-label">WhatsApp</div>
                    <div className="info-value">+52 123 456 7890</div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-ico">
                    <RoomRoundedIcon />
                  </div>
                  <div>
                    <div className="info-label">Ubicación</div>
                    <div className="info-value">Ciudad de México, México</div>
                  </div>
                </div>

                <Card variant="outlined" className="hours-card">
                  <CardContent>
                    <div className="hours-title">
                      <AccessTimeRoundedIcon /> Horarios de Atención
                    </div>
                    <div className="hours-lines">
                      <div>Lunes a Viernes: 9:00 AM - 6:00 PM (GMT-6)</div>
                      <div>Sábados: 9:00 AM - 2:00 PM</div>
                      <div>Domingos: Solo emergencias</div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enlaces rápidos */}
        <Card className="quicklinks-card" elevation={8}>
          <CardContent className="quicklinks-inner">
            <div className="ql-title">
              <LinkRoundedIcon /> Enlaces Rápidos
            </div>
            <div className="ql-grid">
              <a className="ql-btn ql-green" href="#desafio">
                Programa 21 Días
              </a>
              <a className="ql-btn" href="#contacto">
                Coaching 1:1
              </a>
              <a className="ql-btn ql-yellow" href="#blog">
                Recursos Gratis
              </a>
              <a className="ql-btn" href="#historia">
                Testimonios
              </a>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
