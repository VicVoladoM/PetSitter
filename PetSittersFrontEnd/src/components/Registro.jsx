import {
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  return (
    <Box sx={{ backgroundColor: "#EAF6FA" }}>
      <Container maxWidth="sm" sx={{ backgroundColor: "#EAF6FA" }}>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper elelvation={5} sx={{ padding: 5 }}>
            <form>
              <Grid container direction="column" spacing={2}>
                <Grid item align="center">
                  <img
                    src="https://www.helenavets.com/storage/app/media/shutterstock_234936910.jpg"
                    alt=""
                    width={"40%"}
                    border
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="email"
                    fullWidth
                    label="Ingresa tu Email"
                    placeholder="email"
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item>
                  <TextField
                    type={values.showPass ? "text" : "password"}
                    fullWidth
                    label="Ingresa la contraseña"
                    placeholder="Password"
                    variant="outlined"
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handlePassVisibilty}
                            aria-label="toggle password"
                            edge="end"
                          >
                            {values.showPass ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="text"
                    fullWidth
                    label="Ingresa tu Nombre"
                    placeholder="Nombre"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="text"
                    fullWidth
                    label="Ingresa tu Apellido"
                    placeholder="NombApeliido"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="number"
                    fullWidth
                    label="Ingresa tu Numero Telefonico"
                    placeholder="email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" 
                  fullWidth 
                  variant="contained"
                  >
                    CREAR
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    fullWidth
                    variant="outlined"
                    component={Link}
                    to={"/"}
                  >
                    CANCELAR
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}
