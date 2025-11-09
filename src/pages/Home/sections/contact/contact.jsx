import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MovieFilterRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import "./styles.css";

const socials = [
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    user: "@riseupevolution",
    desc: "Inspiración diaria y tips",
    color: "#c13584",
    href: "https://www.instagram.com/riseupevolution/",
  },
  {
    icon: <TikTokIcon />,
    name: "TikTok",
    user: "@riseupevolution",
    desc: "Videos motivacionales",
    color: "#000000",
    href: "https://www.tiktok.com/@riseupevolution",
  },
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    user: "Rise Up Evolution",
    desc: "Comunidad y eventos",
    color: "#1877f2",
    href: "https://www.facebook.com/riseupevolution",
  },
  {
    icon: <YouTubeIcon />,
    name: "YouTube",
    user: "Rise Up Evolution",
    desc: "Masterclasses completas",
    color: "#ff0000",
    href: "https://www.youtube.com/@riseupevolution",
  },
];

const Contact = ({ id = "contacto" }) => {
  // React Hook Form
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      goals: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Contact form submit:", data);
    // Aquí podrías llamar API/EmailJS/etc.
    // alert("¡Gracias! Hemos recibido tus datos. Revisa la consola para ver el payload.");
    reset();
  };

  return (
    <section
      id={id}
      className="section-root contact-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <Container maxWidth="lg">
        <Box className="contact-header">
          <Typography
            variant="h3"
            className="contact-title title-font"
            gutterBottom
          >
            Conéctate con{" "}
            <span className="accent-gradient">Rise Up Evolution</span>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="contact-subtitle text-font"
          >
            Estamos aquí para apoyarte en cada paso de tu evolución. Conéctate
            con nosotros y únete a una comunidad que celebra el crecimiento y la
            transformación.
          </Typography>
        </Box>

        <div className="contact-grid">
          {/* ===== Formulario con react-hook-form ===== */}
          <div className="form-card" elevation={8}>
            <Typography
              variant="h5"
              fontWeight={900}
              gutterBottom
              className="title-font"
              textAlign={"center"}
            >
              ¿Listo para comenzar tu evolución?
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              mb={2}
              className="text-font"
              textAlign={"center"}
            >
              Cuéntanos sobre ti y cómo podemos ayudarte a alcanzar tus
              objetivos
            </Typography>

            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row two">
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "Tu nombre es requerido" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Nombre"
                      fullWidth
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      InputProps={{ className: "text-font" }}
                      InputLabelProps={{ className: "text-font" }}
                      FormHelperTextProps={{ className: "text-font" }}
                    />
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Tu apellido es requerido" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Apellido"
                      fullWidth
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      InputProps={{ className: "text-font" }}
                      InputLabelProps={{ className: "text-font" }}
                      FormHelperTextProps={{ className: "text-font" }}
                    />
                  )}
                />
              </div>

              <Controller
                name="email"
                control={control}
                rules={{
                  required: "El correo es requerido",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Ingresa un correo válido",
                  },
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    InputProps={{ className: "text-font" }}
                    InputLabelProps={{ className: "text-font" }}
                    FormHelperTextProps={{ className: "text-font" }}
                  />
                )}
              />

              <Controller
                name="phone"
                control={control}
                rules={{
                  pattern: {
                    value: /^[0-9+\-\s()]*$/,
                    message:
                      "Usa solo números y símbolos (+, -, espacios, paréntesis)",
                  },
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Teléfono (opcional)"
                    fullWidth
                    inputProps={{ inputMode: "tel" }}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    InputProps={{ className: "text-font" }}
                    InputLabelProps={{ className: "text-font" }}
                    FormHelperTextProps={{ className: "text-font" }}
                  />
                )}
              />

              <Controller
                name="goals"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="¿Cuáles son tus principales objetivos?"
                    multiline
                    rows={3}
                    fullWidth
                    InputProps={{ className: "text-font" }}
                    InputLabelProps={{ className: "text-font" }}
                  />
                )}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                className="submit-btn text-font br-20"
              >
                Quiero ser parte de Rise Up Evolution
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                className="text-font"
                textAlign={"center"}
                mt={1}
              >
                Al enviar este formulario, aceptas recibir comunicaciones de
                Rise Up Evolution. Tu información está segura con nosotros.
              </Typography>
            </form>
          </div>

          {/* ===== Columna derecha: redes + info (tu versión actual) ===== */}
          <div className="right-col">
            <div className="socials-grid">
              {socials.map((s) => (
                <div
                  key={s.name}
                  className="social-card p-6"
                  elevation={6}
                  onClick={() => window.open(s.href, "_blank")}
                  style={{ cursor: "pointer" }}
                >
                  <div className="social-card-inner">
                    <div className="social-icon" style={{ color: s.color }}>
                      {s.icon}
                    </div>
                    <p className="title-font" style={{ fontWeight: 600 }}>
                      {s.name}
                    </p>
                    <p className="text-font m-0">{s.user}</p>
                    <p className="social-user text-font">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-card" elevation={8}>
              <div className="info-inner">
                <p className="info-title title-font">Información de Contacto</p>

                <div className="info-row">
                  <div className="info-ico">
                    <MailOutlineRoundedIcon />
                  </div>
                  <div>
                    <div className="info-label text-font">Email</div>
                    <div className="info-value text-font">
                      hola@riseupevolution.com
                    </div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-ico">
                    <PhoneIphoneRoundedIcon />
                  </div>
                  <div>
                    <div className="info-label text-font">WhatsApp</div>
                    <div className="info-value text-font">+52 123 456 7890</div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-ico">
                    <RoomRoundedIcon />
                  </div>
                  <div>
                    <div className="info-label text-font">Ubicación</div>
                    <div className="info-value text-font">Bogotá, Colombia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
