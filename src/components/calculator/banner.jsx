import { Container, Box, Typography, Button } from "@mui/material";

const BannerCalculadora = () => {
  const handleRedirect = () => {
    window.open(
      "https://club.tevasatransformar.com/calculadora?fbclid=PAdGRleANDy-JleHRuA2FlbQIxMQABp4c8eJvNoEp4y4Ao35CefQRt2gA0Gkfxr-usOT-V0z7qGJCXjk_z75WrsYSE_aem_AfOY5bX8XDARErw-n1zBGA",
      "_blank"
    );
  };

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        py: 6,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Calcula tu evolución 🚀
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Descubre cómo alcanzar tu mejor versión con nuestra herramienta gratuita.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleRedirect}
          sx={{
            borderRadius: "9999px",
            px: 4,
            transition: "all 0.3s ease",
            bgcolor: "#1976d2",
            "&:hover": {
              bgcolor: "#115293",
              transform: "translateY(-3px) scale(1.05)",
              boxShadow: "0 8px 20px rgba(25, 118, 210, 0.35)",
            },
          }}
        >
          Ir a la Calculadora
        </Button>
      </Container>
    </Box>
  );
};

export default BannerCalculadora;
