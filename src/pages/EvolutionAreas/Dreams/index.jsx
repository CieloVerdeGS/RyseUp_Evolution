// src/pages/EvolutionAreas/Dreams/index.jsx
import { Box, Typography } from "@mui/material";
export default function Dreams() {
  return (
    <section style={{ padding: "40px 0" }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", px: 2, textAlign: "center" }}>
        <Typography variant="h3" className="title-font" gutterBottom>
          Sueños
        </Typography>
        <Typography className="text-font" color="text.secondary">
          (Diseño pendiente) Objetivos claros, planificación y logros.
        </Typography>
      </Box>
    </section>
  );
}
