// Footer (comentarios en español)
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import "./styles.css";
    
const Footer = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: integrar con API/newsletter provider
    alert("¡Gracias por suscribirte!");
  };

  return (
    <footer className="footer-root">
      <Container maxWidth="lg">
        {/* Grid superior */}
        <div className="footer-grid">
          {/* Columna: marca + contacto */}
          <div className="f-brand">
            <Typography variant="h5" className="brand-title">
              Rise Up Evolution
            </Typography>

            <Typography className="brand-desc">
              Transformamos vidas a través del crecimiento personal integral.
              Únete a miles de personas que han decidido no conformarse y vivir
              la vida extraordinaria que merecen.
            </Typography>

            <ul className="contact-list">
              <li>
                <MailOutlineRoundedIcon /> hola@riseupevolution.com
              </li>
              <li>
                <LocalPhoneRoundedIcon /> +52 123 456 7890
              </li>
              <li>
                <RoomRoundedIcon /> Ciudad de México, México
              </li>
            </ul>

            <div className="social-row">
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="YouTube"><YouTubeIcon /></a>
              <a href="#" aria-label="Website"><LanguageRoundedIcon /></a>
            </div>
          </div>

          {/* Columna: enlaces */}
          <div className="f-links">
            <Typography variant="h6" className="f-heading">Enlaces Rápidos</Typography>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#somos">Sobre Nosotros</a></li>
              <li><a href="#areas">Áreas de Evolución</a></li>
              <li><a href="#comunidad">Comunidad</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Columna: programas */}
          <div className="f-links">
            <Typography variant="h6" className="f-heading">Programas</Typography>
            <ul>
              <li><a href="#desafio">Desafío 21 Días</a></li>
              <li><a href="#contacto">Coaching Personal</a></li>
              <li><a href="#contacto">Mentoría Grupal</a></li>
              <li><a href="#blog">Recursos Gratuitos</a></li>
            </ul>
          </div>

          {/* Columna: newsletter */}
          <div className="f-news">
            <Typography variant="h6" className="f-heading">
              🚀 Acelera tu Evolución
            </Typography>
            <Typography className="news-desc">
              Recibe tips exclusivos, recursos gratuitos y acceso temprano a nuestros programas.
            </Typography>

            <form className="news-form" onSubmit={onSubmit}>
              <TextField
                placeholder="Tu mejor email"
                type="email"
                required
                className="news-input"
              />
              <Button type="submit" variant="contained" className="news-btn">
                Suscribirme
              </Button>
            </form>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom">
          <div className="left">
            © {new Date().getFullYear()} Rise Up Evolution. Todos los derechos reservados.
            <span className="heart"> ♥</span>
          </div>
          <div className="center quote">
            "La evolución no es algo que te sucede, es algo que eliges hacer."
            <div className="authors">- Carol & Daniel, Fundadores</div>
          </div>
          <div className="right">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Servicio</a>
            <a href="#">Política de Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
