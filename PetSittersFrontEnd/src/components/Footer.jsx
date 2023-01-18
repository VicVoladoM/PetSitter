import { Box, Paper, Typography, Container, } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

export default function Footer() {
  return (
    <Paper
      sx={{
        width: "100%",
        position: "bottom",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>
          <PetsIcon sx={{ mr: 1 }} />
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023. PetSiiters
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
