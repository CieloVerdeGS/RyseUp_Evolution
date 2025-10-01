import { Container, Box, Typography } from "@mui/material";

const CalculatorEmbed = ({ id = "calculadora" }) => {
  return (
    <section
      id={id}
      className="section-root calc-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <Container maxWidth="lg">
        <Box className="section-inner" textAlign="center">
          <Typography variant="h3" fontWeight={800} gutterBottom>
            Calcula tu evolución 🚀
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Usa nuestra herramienta gratuita sin salir de la página.
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "80vh", md: "70vh" }, // responsive
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            <iframe
              src="https://club.tevasatransformar.com/calculadora?fbclid=PAdGRleANDy-JleHRuA2FlbQIxMQABp4c8eJvNoEp4y4Ao35CefQRt2gA0Gkfxr-usOT-V0z7qGJCXjk_z75WrsYSE_aem_AfOY5bX8XDARErw-n1zBGA"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Calculadora de evolución"
              loading="lazy"
            />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default CalculatorEmbed;
