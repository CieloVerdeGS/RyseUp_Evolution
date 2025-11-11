import { Box, Typography, Grid, Paper } from "@mui/material";

export default function Business({ title }) {
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h3" className="title-font" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" className="text-font" color="text.secondary">
        Estrategias prácticas para crecer: networking, liderazgo auténtico y enfoque comercial.
      </Typography>

      <Grid container spacing={2}>
        {[1,2,3,4].map((i) => (
          <Grid key={i} item xs={12} sm={6}>
            <Paper elevation={0} sx={{ p: 2, borderRadius: 3, boxShadow: "0 10px 24px rgba(0,0,0,.08)" }}>
              <Typography className="title-font" fontWeight={800}>Módulo {i}</Typography>
              <Typography className="text-font" color="text.secondary">Descripción corta del módulo.</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
