import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 76px)",
        display: "grid",
        placeItems: "center",
        p: 2,
      }}
    >
      <Box textAlign="center">
        <Typography variant="h3" fontWeight={800} gutterBottom>
          404
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          La página que buscas no existe.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Volver al inicio
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
