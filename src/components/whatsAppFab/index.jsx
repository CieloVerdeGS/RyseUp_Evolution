import { Fab, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppFab = ({
  phone = "573001112233",
  message = "Hola, quiero más información sobre Rise Up Evolution",
}) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Zoom in>
      <Fab
        aria-label="WhatsApp"
        href={href}
        target="_blank"
        rel="noreferrer"
        sx={{
          position: "fixed",
          right: { xs: 16, sm: 24, md: 46 },
          bottom: {
            xs: "calc(env(safe-area-inset-bottom, 0px) + 12px)",
            sm: 24,
            md: 46,
          },
          zIndex: (t) => t.zIndex.tooltip + 1,
          bgcolor: "#25D366",
          color: "#fff",
          transition:
            "background-color 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            bgcolor: "#1ebe5d",
            transform: "scale(1.1)",
            boxShadow: "0 8px 18px rgba(37, 211, 102, 0.4)",
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Zoom>
  );
};

export default WhatsAppFab;
