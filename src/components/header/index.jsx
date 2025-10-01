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
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./styles.css";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#somos" },
  { label: "Áreas", href: "#areas" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Blog", href: "#blog" },
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
            <span className="roboto">Rise Up Evolution</span>
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
                className="nav-link dark-blue-color"
                onClick={handleNavClick(item.href)}
              >
                {item.label}
              </MuiLink>
            ))}
          </Box>

          {/* CTA desktop */}
          <Button
            className="cta-btn roboto white-color cta-btn"
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
            sx={{ display: { xs: "inline-flex", md: "none" } }}  // <- oculta en desktop
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
        PaperProps={{ className: "drawer-paper" }}
      >
        <Box className="drawer-header">
          <span className="brand brand--small roboto">Rise Up Evolution</span>
          <IconButton aria-label="close menu" onClick={() => setOpen(false)}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <List className="drawer-list">
          {NAV.map((item) => (
            <ListItemButton key={item.href} onClick={handleNavClick(item.href)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
          <Box className="drawer-cta-wrap">
            <Button fullWidth className="cta-btn roboto" onClick={handleNavClick("#contacto")}>
              Conéctate
            </Button>
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
