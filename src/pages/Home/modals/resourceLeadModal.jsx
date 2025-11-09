// src/sections/blog/modals/ResourceLeadModal.jsx
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import ModalShell from "../../../components/modalShell";

export default function ResourceLeadModal({ open, onClose, resource }) {
  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      marketingOptIn: false,
      whatsappOptIn: false,
    },
  });

  const onSubmit = async (data) => {
    const payload = { ...data, resource: resource?.title };
    console.log("Lead data:", payload);

    // Ejemplo para enviar a tu backend / Zapier / Apps Script:
    // await fetch("https://tu-webhook-o-api.com/leads", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });

    reset();
    onClose?.();
  };

  return (
    <ModalShell
      open={open}
      onClose={onClose}
      title={resource?.title || "Recurso disponible"}
      subtitle="Completa tus datos para recibir el material y novedades útiles"
      maxWidth={480}
      paperSx={{ py: 3 }}
      actions={
        <Button
          type="submit"
          form="resourceLeadForm"
          size="large"
          variant="contained"
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
        >
          Enviar y acceder
        </Button>
      }
    >
      <Box
        component="form"
        id="resourceLeadForm"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "grid", gap: 2 }}
      >
        <Typography
          variant="body2"
          sx={{ textAlign: "center" }}
          className="text-font"
        >
          Usaremos tus datos para enviarte este recurso y contenido relacionado.
          Puedes darte de baja cuando quieras.
        </Typography>

        <Controller
          name="name"
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
          name="email"
          control={control}
          rules={{
            required: "El correo es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Correo inválido",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Correo electrónico"
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
              message: "Solo números y símbolos (+ - () )",
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
          name="marketingOptIn"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} />}
              label={
                <span className="text-font">
                  Acepto recibir comunicaciones de Rise Up Evolution y la{" "}
                  <Link
                    href="/privacidad"
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                  >
                    política de privacidad
                  </Link>
                  .
                </span>
              }
            />
          )}
        />

        <Controller
          name="whatsappOptIn"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} />}
              label={
                <span className="text-font">
                  Deseo recibir contacto por WhatsApp
                </span>
              }
            />
          )}
        />

        <p
          variant="caption"
          color="text.secondary"
          sx={{ textAlign: "center" }}
          className="text-font m-0"
        >
          * Puedes darte de baja en cualquier momento desde nuestros correos.
        </p>
      </Box>
    </ModalShell>
  );
}
