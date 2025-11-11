import { Box, Typography, Paper } from "@mui/material";

export default function PersonalAndSpiritual({ title }) {
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h3" className="title-font" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" className="text-font" color="text.secondary">
        Autoconocimiento, prácticas espirituales y decisiones alineadas a tu propósito.
      </Typography>

      <Paper elevation={0} sx={{ p: 3, borderRadius: 3, boxShadow: "0 10px 24px rgba(0,0,0,.08)" }}>
        <Typography className="title-font" fontWeight={800} mb={1}>Ruta sugerida</Typography>
        <ul className="text-font" style={{ margin: 0, paddingLeft: "1.2rem" }}>
          <li>Diario de claridad (7 días)</li>
          <li>Respiración + mindfulness (10 min)</li>
          <li>Definición de valores personales</li>
        </ul>
      </Paper>
    </Box>
  );
}
