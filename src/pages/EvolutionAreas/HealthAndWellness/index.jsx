import { Box, Typography, Grid, Paper, Button } from "@mui/material";

export default function HealthAndWellness({ title }) {
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h3" className="title-font" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" className="text-font" color="text.secondary">
        Transforma tu cuerpo y mente con hábitos que perduran: nutrición, rutinas inteligentes y bienestar mental.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 0.5 }}>
        {[1,2,3].map((i) => (
          <Grid key={i} item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 2, borderRadius: 3, boxShadow: "0 10px 24px rgba(0,0,0,.08)" }}>
              <Typography className="title-font" fontWeight={800} mb={0.5}>Bloque {i}</Typography>
              <Typography className="text-font" color="text.secondary">Detalle breve del recurso o módulo.</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        className="text-font"
        onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
        sx={{ alignSelf: "flex-start", mt: 1, borderRadius: "9999px", textTransform: "none", fontWeight: 900 }}
      >
        Empezar mi plan
      </Button>
    </Box>
  );
}
