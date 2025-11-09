// src/components/modals/ModalShell.jsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTheme } from "@mui/material/styles";

export default function ModalShell({
  open,
  onClose,
  title,
  subtitle,
  children,
  actions,
  maxWidth = 480,
  paperSx,
}) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isXs}
      PaperProps={{
        sx: {
          borderRadius: isXs ? 0 : 2,
          p: { xs: 0.5, sm: 1.5 },
          width: "100%",
          maxWidth,
          ...paperSx,
        },
      }}
    >
      {(title || onClose) && (
        <DialogTitle
        className="title-font"
          sx={{
            fontWeight: 900,
            textAlign: "center",
            pr: 6,
          }}
        >
          {title}
          {onClose && (
            <IconButton
              aria-label="Cerrar"
              onClick={onClose}
              sx={{ position: "absolute", right: 10, top: 10, color: "#777" }}
            >
              <CloseRoundedIcon />
            </IconButton>
          )}
          {subtitle && (
            <Typography
              component="div"
              variant="body2"
              color="text.secondary"
              className="text-font"
              sx={{ mt: 0.5, fontWeight: 500 }}
            >
              {subtitle}
            </Typography>
          )}
        </DialogTitle>
      )}

      <DialogContent dividers sx={{ border: "none", px: { xs: 2, sm: 3 }, pb: 2 }}>
        {children}
      </DialogContent>

      {actions && (
        <DialogActions
          sx={{ justifyContent: "center", pb: { xs: 2, sm: 2.5 }, pt: 1 }}
        >
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
}
