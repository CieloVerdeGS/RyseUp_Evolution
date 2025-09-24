// OurValues con layout en divs + CSS (comentarios en español)
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
          <Typography variant="h3" className="values-title" gutterBottom>
            Nuestros <span className="accent-gradient">Valores</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" className="values-subtitle">
            Estos principios guían cada decisión que tomamos y cada paso que damos en nuestro
            camino hacia la evolución.
          </Typography>
        </Box>

        {/* 👇 Layout en divs + CSS grid */}
        <div className="values-grid">
          {VALUES.map((v) => (
            <div className="values-item" key={v.title}>
              <Card elevation={6} className="value-card">
                <CardContent className="value-content">
                  <IconBox>{v.icon}</IconBox>
                  <Box>
                    <Typography variant="h6" fontWeight={800}>{v.title}</Typography>
                    <Typography variant="body2" color="text.secondary" mt={0.5}>
                      {v.desc}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurValues;
