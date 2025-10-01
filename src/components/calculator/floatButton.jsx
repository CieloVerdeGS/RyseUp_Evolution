import { Fab, Zoom } from "@mui/material";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";

const CalcFab = () => {
  const href =
    "https://club.tevasatransformar.com/calculadora?fbclid=PAdGRleANDy-JleHRuA2FlbQIxMQABp4c8eJvNoEp4y4Ao35CefQRt2gA0Gkfxr-usOT-V0z7qGJCXjk_z75WrsYSE_aem_AfOY5bX8XDARErw-n1zBGA";

  return (
    <Zoom in>
      <Fab
        aria-label="Calculadora"
        href={href}
        target="_blank"
        rel="noreferrer"
        sx={{
          position: "fixed",
          right: 16,
          bottom: 86, // justo arriba del WhatsAppFab
          zIndex: (t) => t.zIndex.tooltip + 1,
          bgcolor: "#1976d2",
          color: "#fff",
          transition: "background-color 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            bgcolor: "#115293",
            transform: "scale(1.1)",
            boxShadow: "0 8px 18px rgba(25, 118, 210, 0.4)",
          },
        }}
      >
        <CalculateRoundedIcon />
      </Fab>
    </Zoom>
  );
};

export default CalcFab;
