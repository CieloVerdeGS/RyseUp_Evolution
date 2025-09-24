// Sección Contact (comentarios en español)
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import "./styles.css";

const Contact = ({ id }) => {
  return (
    <section
      id={id}
      className="section-root contact-root"
      style={{ scrollSnapAlign: "start" }}
    >
      <Container maxWidth="sm">
        <Box className="section-inner" textAlign="center">
          <Typography variant="h3" fontWeight={800} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Do you want to start your evolution journey? Write us a message 👇
          </Typography>

          <form className="contact-form">
            <TextField label="Name" fullWidth margin="normal" required />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              required
            />
            <Button variant="contained" size="large" sx={{ mt: 2 }}>
              Send
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  );
};

export default Contact;
