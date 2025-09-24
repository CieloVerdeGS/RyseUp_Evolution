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
          right: 16,
          bottom: 16,
          zIndex: (t) => t.zIndex.tooltip + 1,
          bgcolor: "#25D366",
          color: "#fff",
          "&:hover": { bgcolor: "#1ebe5d" },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Zoom>
  );
};

export default WhatsAppFab;
