import { Box, Typography, Grid, Paper, Button } from "@mui/material";

export default function Dreams({ title }) {
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h3" className="title-font" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" className="text-font" color="text.secondary">
        Convierte tus sueños en proyectos con objetivos claros y hoja de ruta.
      </Typography>

      <Grid container spacing={2}>
        {[1,2].map((i) => (
          <Grid key={i} item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, boxShadow: "0 10px 24px rgba(0,0,0,.08)" }}>
              <Typography className="title-font" fontWeight={800}>Toolkit {i}</Typography>
              <Typography className="text-font" color="text.secondary">
                Herramientas y plantillas para planificación y seguimiento.
              </Typography>
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
        Quiero planear mi meta
      </Button>
    </Box>
  );
}
