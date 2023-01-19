import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import Review from './Review';

export default function DetalleCuidador() {

  const [cuidadores, setCuidadores] = useState([]);
  useEffect(() => {
    loadCuidadoresList();
  }, []);

  async function loadCuidadoresList() {
    try {
      const response = await fetch(
        `http://localhost:8000/api/obener-petsitterdetails`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.result.length) {
        console.log("Entro");
        setCuidadores(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [ definitions ] = useState({
    "name": "Frank",
    "url": "https://uvmbored.com/wp-content/uploads/2017/01/54-atxl.jpg"
  });

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

  return (
    <Box sx={{ backgroundColor: "#EAF6FA", minHeight: "45vh" }}>

      <Container>
        <CustomBox>
            <Review data={definitions}/>
        </CustomBox>
      </Container>

      <Container align="center">
        <CustomBox sx={{ paddingBottom:"3rem" }}>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Paper elevation={5} sx={{ height: 400 }}>
              
            </Paper>
          </Box>
        </CustomBox>
        <CustomBox>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Paper elevation={5} sx={{ height: 400, marginBottom:"2rem" }}>
            </Paper>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}