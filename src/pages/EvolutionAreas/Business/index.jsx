// src/pages/EvolutionAreas/Business/index.jsx
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Business() {
  const navigate = useNavigate();
  return (
    <section style={{ padding: "40px 0" }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", px: 2, textAlign: "center" }}>
        <Typography variant="h3" className="title-font" gutterBottom>
          Negocios
        </Typography>
        <Typography className="text-font" color="text.secondary">
          (Diseño pendiente) Estrategias, liderazgo y crecimiento.
        </Typography>
        <Button onClick={() => navigate("/#contacto")} sx={{ mt: 2 }} variant="contained">
          Contáctanos
        </Button>
      </Box>
    </section>
  );
}
