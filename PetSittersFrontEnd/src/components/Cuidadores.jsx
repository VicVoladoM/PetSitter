import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "10%",
});

export default function Lista() {

  const [cuidadores, setCuidadores] = useState([]);
  useEffect(() => {
    loadCuidadoresList();
  }, []);

  async function loadCuidadoresList() {
    try {
      const response = await fetch(`http://localhost:8000/api/obener-petsitterdetails`, {
        method: "GET",
      });
      const data = await response.json();
      if (data.result.length) {
        setCuidadores(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const listItems = cuidadores.map((cuidador) => (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        mt: "2rem",
      }}
    >
      <Grid container spacing={2} key={cuidador.cuidadorId}>
        <Grid item >
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={cuidador.PhotoURL} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {cuidador.nombreCuidador} {cuidador.lastName}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Edad: {cuidador.edad}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ubicacion: {cuidador.estado}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                component={Link}
                to={"/detallecuidador/"+cuidador.cuidadorId}              
                >
                ver mas
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Rating
              name="rating"
              size="small"
              value={cuidador.rating}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  ));
  return (
    <Box
      sx={{
        backgroundColor: "#EAF6FA",
        paddingTop: "50px",
        paddingBottom: "50px",
        minHeight: "100%",
      }}
    >
      {listItems}
    </Box>
  );
}
