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
import "./styles.css";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#somos" },
  { label: "Áreas de Evolución", href: "#areas" },
  { label: "Historias", href: "#comunidad" },
  { label: "Recursos Gratis", href: "#recursos" },
  // { label: "Blog", href: "#blog" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="white"
      className={`header-appbar is-scrolled`}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters className="header-toolbar">
          <Box
            className="brand"
            role="button"
            tabIndex={0}
            onClick={handleNavClick("#inicio")}
          >
            <span className="title-font">Rise Up Evolution</span>
          </Box>

          <Box className="spacer" />

          {/* Nav desktop/tablet ancho */}
          <Box
            className="nav-links roboto dark-blue-color"
            sx={{ display: { xs: "none", md: "flex" }, gap: "24px", mr: 1.5 }}
          >
            {NAV.map((item) => (
              <MuiLink
                key={item.href}
                href={item.href}
                underline="none"
                className="nav-link dark-blue-color text-font"
                onClick={handleNavClick(item.href)}
              >
                {item.label}
              </MuiLink>
            ))}
          </Box>

          {/* CTA desktop */}
          <Button
            className="cta-btn text-font white-color cta-btn"
            onClick={handleNavClick("#contacto")}
            sx={{ display: { xs: "none", md: "inline-flex" } }}
          >
            Conéctate
          </Button>

          <IconButton
            className="menu-btn"
            edge="end"
            aria-label="open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }} // <- oculta en desktop
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
          sx: {
            backgroundColor: "#fff",
            padding: "1.2rem",
            fontFamily: "'Inconsolata', monospace",
          },
        }}
      >
        {/* Header del Drawer */}
        <Box
          className="drawer-header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <span
            className="brand brand--small title-font"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "1.5rem",
              letterSpacing: "0.05em",
              color: "#12b159",
            }}
          >
            Rise Up Evolution
          </span>

          <IconButton aria-label="close menu" onClick={() => setOpen(false)}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        {/* Lista de enlaces */}
        <List
          className="drawer-list"
          sx={{
            "& .MuiListItemButton-root": {
              fontFamily: "'Inconsolata', monospace",
              textAlign: "center",
              borderRadius: "8px",
              mb: 1,
              transition: "background 0.3s ease, color 0.3s ease",
              "&:hover": {
                background: "rgba(18, 177, 89, 0.08)",
                color: "#12b159",
              },
            },
            "& .MuiListItemText-primary": {
              fontSize: "1.1rem",
              fontWeight: 500,
              letterSpacing: "0.03em",
            },
          }}
        >
          {NAV.map((item) => (
            <ListItemButton key={item.href} onClick={handleNavClick(item.href)}>
              <p>{item.label}</p>
            </ListItemButton>
          ))}

          {/* Botón CTA */}
          <Button
            fullWidth
            onClick={handleNavClick("#contacto")}
            sx={{
              mt: 2,
              py: 1.2,
              borderRadius: "50px",
              fontFamily: "'Inconsolata', monospace",
              fontWeight: 600,
              background: "linear-gradient(90deg, #12b159, #F4C542)",
              color: "#fff",
              textTransform: "none",
              fontSize: "1rem",
              transition: "background 0.3s ease",
              "&:hover": {
                background: "linear-gradient(90deg, #0e9448, #d4a731)",
              },
            }}
          >
            Conéctate
          </Button>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
