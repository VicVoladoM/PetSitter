import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import Review from "./Review";
import { useParams } from "react-router-dom";
import PetCard from "./PetCard"

export default function DetalleCuidador() {
  const [definitions] = useState({
    name: "Frank",
    url: "https://uvmbored.com/wp-content/uploads/2017/01/54-atxl.jpg",
  });
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "55px",
    color: "black",
    fontWeight: "bold",
    padding: 0
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const {id} = useParams()

  const [cuidadores, setCuidadores] = useState({});
  useEffect(() => {
    loadCuidadoresList();
  }, []);

  async function loadCuidadoresList() {
    try {
      const response = await fetch(`http://localhost:8000/api/obtener-petsitterdetail/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      console.log("🚀 ~ file: DetalleCuidador.jsx:40 ~ loadCuidadoresList ~ response", response)
      console.log(data);
      if (data) {
        console.log("Entro");
        setCuidadores(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ backgroundColor: "#EAF6FA", minHeight: "45vh" }}>
      <Container>
        <CustomBox>
          <Review data={cuidadores} />
        </CustomBox>
      </Container>

      <Container align="center" sx={{ paddingBottom: "3rem", alignItems:"center" }}>
        <CustomBox sx={{ paddingBottom: "3rem", p:"auto" }}>
          <Box sx={{ flex: 1, textAlign: "center"}}>
            <Paper elevation={5} sx={{ height: 600 }}>
              <PetCard></PetCard>
            </Paper>
          </Box>
        </CustomBox>

        <CustomBox>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Paper
              elevation={5}
              sx={{ height: 400, marginBottom: "2rem" }}
            ></Paper>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}
