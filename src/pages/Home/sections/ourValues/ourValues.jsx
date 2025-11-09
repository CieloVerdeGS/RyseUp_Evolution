import { Container, Box, Typography, Card, CardContent } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import "./styles.css";

function IconBox({ children }) {
  return <div className="icon-box">{children}</div>;
}

const VALUES = [
  { title: "Pasión", desc: "Vivimos con pasión cada día, inspirando a otros a encontrar la suya", icon: <FavoriteBorderRoundedIcon fontSize="large" /> },
  { title: "Propósito", desc: "Cada acción tiene un propósito claro: tu crecimiento y evolución", icon: <TrackChangesRoundedIcon fontSize="large" /> },
  { title: "Energía", desc: "Irradiamos energía positiva que contagia y transforma vidas", icon: <BoltRoundedIcon fontSize="large" /> },
  { title: "Comunidad", desc: "Creemos en el poder de crecer juntos y apoyarnos mutuamente", icon: <GroupRoundedIcon fontSize="large" /> },
  { title: "Autenticidad", desc: "Somos genuinos en todo lo que hacemos, sin máscaras ni falsas promesas", icon: <AutoFixHighRoundedIcon fontSize="large" /> },
  { title: "Crecimiento", desc: "El crecimiento constante es nuestro estilo de vida y nuestra misión", icon: <TrendingUpRoundedIcon fontSize="large" /> },
];

const OurValues = ({ id = "valores" }) => {
  return (
    <section id={id} className="section-root values-root" style={{ scrollSnapAlign: "start" }}>
      <Container maxWidth="lg">
        <Box className="values-header">
          <Typography variant="h3" className="values-title title-font" gutterBottom>
            Nuestros <span className="accent-gradient">Valores</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" className="values-subtitle text-font" alignItems={'center'}>
            Estos principios guían cada decisión que tomamos y cada paso que damos en nuestro
            camino hacia la evolución.
          </Typography>
        </Box>

        <div className="values-grid">
          {VALUES.map((v) => (
            <div className="values-item " key={v.title}>
              <div elevation={6} className="value-card">
                <CardContent className="value-content">
                  <IconBox>{v.icon}</IconBox>
                  <Box className="value-copy">
                    <p className="value-title title-font accent-gradient m-2">{v.title}</p>
                    <Typography className="value-desc text-font" color="text.secondary">
                      {v.desc}
                    </Typography>
                  </Box>
                </CardContent>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurValues;
