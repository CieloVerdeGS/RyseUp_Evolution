// Footer
import { Container } from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded"; // ✅ TikTok icon
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer-root">
      <Container maxWidth="lg">
        {/* Grid superior */}
        <div className="footer-grid">
          {/* Columna: marca + contacto */}
          <div className="f-brand">
            <h3 className="brand-title title-font">Rise Up Evolution</h3>

            <p className="brand-desc text-font">
              Transformamos vidas a través del crecimiento personal integral.
              Únete a miles de personas que han decidido no conformarse y vivir
              la vida extraordinaria que merecen.
            </p>

            <ul className="contact-list text-font">
              <li>
                <MailOutlineRoundedIcon /> hola@riseupevolution.com
              </li>
              <li>
                <LocalPhoneRoundedIcon /> +52 123 456 7890
              </li>
              <li>
                <RoomRoundedIcon /> Bogotá, Colombia
              </li>
            </ul>

            {/* Redes sociales con links reales */}
            <div className="social-row">
              <a
                href="https://www.instagram.com/riseupevolution/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.tiktok.com/@riseupevolution"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MovieFilterRoundedIcon />
              </a>

              <a
                href="https://www.facebook.com/riseupevolution"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.youtube.com/@riseupevolution"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </a>

              {/* <a
                href="https://riseupevolution.com"
                aria-label="Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LanguageRoundedIcon />
              </a> */}
            </div>
          </div>

          {/* Columna: partner */}
          <div className="f-news">
            <p className="partner-eyebrow text-font">
              En colaboración con <b>WeDoTransformations</b>
            </p>
            <img
              src="/images/WeDoTransformations.png"
              alt="WeDoTransformations"
              className="WeDoTransformations-img"
            />
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom text-font">
          <div className="left">
            © {new Date().getFullYear()} Rise Up Evolution. Todos los derechos
            reservados.
            <span className="heart"> ♥</span>
          </div>
          <div className="center quote">
            “La evolución no es algo que te sucede, es algo que eliges hacer.”
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
