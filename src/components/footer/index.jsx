// Footer (comentarios en español)
import { Container, Box, Typography, TextField, Button } from "@mui/material";
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
                <RoomRoundedIcon />  Bogotá, Colombia
              </li>
            </ul>

            <div className="social-row">
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="YouTube">
                <YouTubeIcon />
              </a>
              <a href="#" aria-label="Website">
                <LanguageRoundedIcon />
              </a>
            </div>
          </div>


          {/* Columna: newsletter */}
          <div className="f-news">
          <p className="hero-subtitle m-0 roboto">
            En colaboracion con <b>WeDoTransformations</b>
          </p>
          <img
            src="/images/WeDoTransformations.png"
            alt="WeDoTransformations"
            className="WeDoTransformations-img"
          />
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom">
          <div className="left">
            © {new Date().getFullYear()} Rise Up Evolution. Todos los derechos
            reservados.
            <span className="heart"> ♥</span>
          </div>
          <div className="center quote">
            "La evolución no es algo que te sucede, es algo que eliges hacer."
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
};

export default Footer;
