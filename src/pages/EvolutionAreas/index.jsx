// src/pages/EvolutionAreas.jsx
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";

const AREA_CONTENT = {
  wellness: {
    title: "Salud y Bienestar",
    intro:
      "Transforma tu cuerpo y mente con hábitos saludables que perduran. Aquí encontrarás nutrición personalizada, rutinas efectivas y bienestar mental.",
  },
  business: {
    title: "Negocios",
    intro:
      "Desarrolla habilidades y mentalidad para impulsar tu crecimiento profesional y empresarial con estrategias prácticas.",
  },
  spiritual: {
    title: "Personal y Espiritual",
    intro:
      "Conecta con tu esencia, profundiza tu autoconocimiento y alinea tus decisiones con tu propósito.",
  },
  dreams: {
    title: "Sueños",
    intro:
      "Define objetivos claros, planifica con intención y celebra tus logros en el camino hacia tus grandes metas.",
  },
};

export default function EvolutionAreasPage() {
  const [params] = useSearchParams();
  const areaKey = params.get("area") || "wellness"; // default si no viene param
  const data = AREA_CONTENT[areaKey] || AREA_CONTENT.wellness;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [areaKey]);

  return (
    <section className="section-root" style={{ padding: "80px 0" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h3" className="title-font" gutterBottom>
            {data.title}
          </Typography>
          <Typography variant="body1" className="text-font" color="text.secondary">
            {data.intro}
          </Typography>
        </Box>

        {/* Aquí renderizas lo que quieras para cada área:
            cards, módulos, CTAs, etc. Puedes ramificar por areaKey */}
        <Box sx={{ mt: 4 }}>
          <Typography className="text-font">
            (Contenido de <b>{data.title}</b> — coloca aquí tus secciones, recursos y CTAs específicos.)
          </Typography>
        </Box>
      </Container>
    </section>
  );
}
