import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: "secondary.main",
      position: "fixed",
      bottom: 0,
      width: "100%",
    }}
  >
    <Container maxWidth="sm">
      <Typography variant="body1" textAlign="center" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Emaily
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Container>
    </Box>
  );
}
