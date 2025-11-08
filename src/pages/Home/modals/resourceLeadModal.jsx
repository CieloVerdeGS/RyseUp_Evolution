 import { Box, Typography, Button } from "@mui/material";
import ModalShell from "../../../components/modalShell/index";

export default function ResourceLeadModal({
  open,
  onClose,
  resource, // { title, color, ... }
}) {
  return (
    <ModalShell
      open={open}
      onClose={onClose}
      title={resource?.title || "Recurso Disponible"}
      subtitle="¡Tu recurso está casi listo!"
      maxWidth={480}
      paperSx={{}}
      actions={
        <Button
          size="large"
          sx={{
            borderRadius: "9999px",
            px: 4,
            textTransform: "none",
            fontWeight: 900,
            background: resource?.color || "#1fbf63",
            "&:hover": {
              background: resource?.color || "#1fbf63",
              filter: "brightness(1.05)",
            },
          }}
          variant="contained"
          onClick={onClose}
        >
          Cerrar
        </Button>
      }
    >
      <Box
        sx={{
          display: "grid",
          gap: 1.5,
          textAlign: "center",
          py: 1,
        }}
      >
        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 600 }}>
          Gracias por tu interés en <b>{resource?.title}</b>.
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Pronto podrás acceder a este material exclusivo. Mantente atento a
          nuestras redes o revisa tu correo para recibir el enlace de descarga 📩
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 1, opacity: 0.8 }}
        >
          * Rise Up Evolution — Contenido creado para tu evolución personal.
        </Typography>
      </Box>
    </ModalShell>
  );
}
