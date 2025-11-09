import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Button,
  Link as MuiLink,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const NAV = [
  { label: "Inicio", anchor: "inicio" },
  { label: "Sobre Nosotros", anchor: "somos" },
  { label: "Áreas de Evolución", anchor: "areas" },
  { label: "Historias", anchor: "historia" },
  { label: "Recursos Gratis", anchor: "recursos" },
  { label: "Contacto", anchor: "contacto" },
];

// helper para scroll interno
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goAnchor = (anchor) => (e) => {
    e.preventDefault();
    // si ya estamos en Home, scroll directo
    if (location.pathname === "/") {
      scrollToId(anchor);
      setOpen(false);
      return;
    }
    // si estamos en otra ruta, navegar a Home con estado y que Home haga el scroll
    navigate("/", { state: { anchor } });
    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="default"
      className={`header-appbar ${scrolled ? "is-scrolled" : ""}`}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters className="header-toolbar">
          <Box
            className="brand"
            role="button"
            tabIndex={0}
            onClick={goAnchor("inicio")}
          >
            <span className="title-font">Rise Up Evolution</span>
          </Box>

          <Box className="spacer" />

          {/* Nav (desktop) */}
          <Box
            className="nav-links text-font"
            sx={{ display: { xs: "none", md: "flex" }, gap: "24px", mr: 1.5 }}
          >
            {NAV.map((item) => (
              <MuiLink
                key={item.anchor}
                href={`/#${item.anchor}`}
                underline="none"
                className="nav-link text-font"
                onClick={goAnchor(item.anchor)}
              >
                {item.label}
              </MuiLink>
            ))}
          </Box>

          {/* CTA (desktop) */}
          <Button
            className="cta-btn text-font"
            onClick={goAnchor("contacto")}
            sx={{ display: { xs: "none", md: "inline-flex" } }}
          >
            Conéctate
          </Button>

          {/* Burger (mobile) */}
          <IconButton
            className="menu-btn"
            edge="end"
            aria-label="open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Drawer mobile */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          className: "drawer-paper",
          sx: { backgroundColor: "#fff", p: "1.2rem" },
        }}
      >
        <Box
          className="drawer-header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <span className="brand brand--small title-font" style={{ color: "#12b159" }}>
            Rise Up Evolution
          </span>
          <IconButton aria-label="close menu" onClick={() => setOpen(false)}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <List className="drawer-list">
          {NAV.map((item) => (
            <ListItemButton key={item.anchor} onClick={goAnchor(item.anchor)}>
              <p className="text-font">{item.label}</p>
            </ListItemButton>
          ))}

          <Button
            fullWidth
            onClick={goAnchor("contacto")}
            sx={{
              mt: 2,
              py: 1.2,
              borderRadius: "9999px",
              fontWeight: 700,
              background: "linear-gradient(90deg, #12b159, #F4C542)",
              color: "#fff",
              textTransform: "none",
            }}
          >
            Conéctate
          </Button>
        </List>
      </Drawer>
    </AppBar>
  );
}
