import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Typography, styled } from "@mui/material";

import List from "@mui/material/List";
import Rating from "@mui/material/Rating";
const Review = ({ data }) => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "55px",
    color: "black",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 2, 0),
  }));
  return (
    <>
      <Box sx={{ flex: "1", marginTop: "10rem" }}>
        <img
          src={data.url}
          alt="heroImg"
          style={{
            maxWidth: "100%",
            marginBottom: "1.5rem",
            borderRadius: "5%",
            height: "100%",
          }}
        />
      </Box>

      <Box sx={{ flex: "1", paddingTop: "130px", textAlign: "center" }}>
        <Title variant="h1" sx={{ fontSize: "30px" }}>
          CUIDADOR SERTIFICADO
        </Title>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem sx={{ ml: "4rem", m: "auto", pl: "3.5rem" }}>
            <ListItemText primary="Nombre" secondary="Jan 9, 2014" />
            <ListItemText primary="Edad" secondary="Jan 9, 2014" />
            <ListItemText primary="Ubicacion" secondary="Jan 9, 2014" />
            <Rating name="rating" size="small" value={5} readOnly />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
export default Review;
