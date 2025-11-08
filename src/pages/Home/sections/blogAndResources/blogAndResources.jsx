 import {
  Container,
  Box,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { useState } from "react";
 import "./styles.css";
import ResourceLeadModal from "../../modals/resourceLeadModal";

const RESOURCES = [
  {
    icon: <DescriptionRoundedIcon />,
    label: "PDF + Videos",
    title: "E-book: Guía Completa de Nutrición",
    desc: "Recetas fáciles y deliciosas + videos paso a paso para transformar tu alimentación.",
    color: "#10b76b",
  },
  {
    icon: <PlayCircleOutlineRoundedIcon />,
    label: "Video Clase",
    title: "Masterclass: Mentalidad de Éxito",
    desc: "Sesión exclusiva de 60 minutos sobre cómo desarrollar la mentalidad de un ganador.",
    color: "#f2b400",
  },
  {
    icon: <FileDownloadRoundedIcon />,
    label: "Templates",
    title: "Plantillas de Planificación",
    desc: "Templates descargables para planificar tus objetivos y hacer seguimiento efectivo.",
    color: "#2f82ff",
  },
];

export default function BlogAndResources({ id = "blog" }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (r) => {
    setSelected(r);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  // Aquí conectas con EmailJS, Google Forms o tu backend
  const handleSubmitLead = async (payload) => {
    console.log("Lead enviado:", payload);
    // Ejemplo rápido: Google Forms (sustituye URL y entry.<id>):
    // await fetch("https://docs.google.com/forms/d/e/<FORM_ID>/formResponse", {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams({
    //     "entry.111111": payload.name,
    //     "entry.222222": payload.email,
    //     "entry.333333": payload.phone,
    //     "entry.444444": payload.resourceTitle,
    //   }),
    // });

    alert(`¡Gracias ${payload.name}! Te enviaremos "${payload.resourceTitle}".`);
  };

  return (
    <section id={id} className="section-root blog-root" style={{ scrollSnapAlign: "start" }}>
      <Container maxWidth="lg">
        <Box className="blog-header">
          <Typography variant="h3" className="blog-title title-font" gutterBottom>
            <span className="accent-gradient">Recursos</span> Gratuitos
          </Typography>
          <p className="blog-subtitle text-font">
            Accede a contenido exclusivo, guías prácticas y recursos que te
            ayudarán a acelerar tu proceso de evolución personal y profesional.
          </p>
        </Box>

        <div className="resources-grid">
          {RESOURCES.map((r) => (
            <div key={r.title} className="resources-item">
              <div className="res-card">
                <div className="res-body">
                  <div
                    className="res-icon"
                    style={{
                      background: `linear-gradient(180deg, ${r.color} 0%, rgba(255,255,255,.85) 130%)`,
                    }}
                  >
                    {r.icon}
                  </div>
                  <Chip size="small" label={r.label} className="res-label" />
                  <Typography variant="h6" fontWeight={900} className="res-title title-font">
                    {r.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="res-desc text-font">
                    {r.desc}
                  </Typography>
                  <Button
                    variant="contained"
                    className="res-cta text-font"
                    sx={{
                      background: r.color,
                      "&:hover": { background: r.color },
                      borderRadius: "20px",
                    }}
                    onClick={() => openModal(r)}
                  >
                    Descargar Gratis
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal reutilizable para leads de recursos */}
      <ResourceLeadModal
        open={open}
        onClose={closeModal}
        resource={selected}
        onSubmitLead={handleSubmitLead}
      />
    </section>
  );
}
