// Sección BlogAndResources (comentarios en español)
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import "./styles.css";

const ARTICLES = [
  { title: "5 claves para mejorar tu resistencia", link: "#" },
  { title: "Entrenamiento de fuerza sin lesiones", link: "#" },
  { title: "Cómo la mentalidad impulsa el rendimiento", link: "#" },
];

const BlogAndResources = ({ id }) => {
  return (
    <section
      id={id}
      className="section-root blog-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <Container maxWidth="lg">
        <Box className="section-inner">
          <Typography variant="h3" fontWeight={800} gutterBottom>
            Blog & Resources
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth={720}
            mb={4}
          >
            Aprende, inspírate y mantente al día con consejos y artículos de
            nuestros coaches.
          </Typography>

          <Grid container spacing={3}>
            {ARTICLES.map((a) => (
              <Grid item xs={12} md={4} key={a.title}>
                <Card variant="outlined" className="blog-card">
                  <CardContent>
                    <Typography variant="h6" fontWeight={700}>
                      {a.title}
                    </Typography>
                    <Button
                      href={a.link}
                      size="small"
                      sx={{ mt: 2 }}
                      variant="text"
                    >
                      Leer más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default BlogAndResources;
