
import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import heroImg from "../media/pet3.jpg";
import Paper from '@mui/material/Paper';
import ServicesCard from "./ServicesCard";

const Home = () => {

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }
  }));
  
  const CustomBox2 = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(1),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    }
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "55px",
    color: "black",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 2, 0),
  }));

  const Title2 = styled(Typography)(({ theme }) => ({
    fontSize: "35px",
    color: "black",
    fontWeight: "bold",
    variant: "h4",
    margin: theme.spacing(4, 0, 2, 0),
  }));

  return (
   
    <Box sx={{ backgroundColor: "#EAF6FA", minHeight: "45vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1"}}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "grey",
                fontWeight: "500",
                mt: 12,
                mb: 4,
              }}
            >
              Bienvenido a PetSitters
            </Typography>
            <Title variant="h1">
              Las Mejores Experiencias Para Tus Mascotas
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", 
              color: "grey", 
              textAlign: 'justify' }}
            >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, Extet te
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.tempor incididunt ut labore 
                  et dolore magna aliqua.
            </Typography>
          </Box>
          <Box sx={{ flex: "1", marginTop: "10rem" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "1.5rem", borderRadius: "5%" }}
            />
          </Box>
        </CustomBox>
      </Container>
      <Container align="center">
        <CustomBox2>
            <Box sx={{ flex:1, textAlign: "center" }}>
                <Paper elevation={5} sx = {{ height: 400 }} >
                    <Title2>
                        ¿Por que elegir PetSitters?
                    </Title2>
                    <div>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "grey" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                        </Typography>
                    </div>
                    <div style={{ objectPosition: "bottom"}}>
                        <img 
                            src="https://www.diabetes.co.uk/wp-content/uploads/2019/01/pets-cats-dog-rabbit.jpg" 
                            alt="catdog" 
                            style={{ height: 200, maxWidth: "100%",  }}
                        />
                    </div>
                </Paper>
            </Box>
            <Box sx={{ flex:1, textAlign: "center" }}>
                <Paper elevation={5} sx = {{ height: 400 }} >
                    <Title2>
                        ¿Cuales son nuestros intereses?
                    </Title2>
                    <div>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "grey" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                        </Typography>
                    </div>
                    <div style={{ objectPosition: "bottom"}}>
                        <img 
                            src="https://www.cdc.gov/healthypets/images/covid/dog-and-cat.jpg?_=46111" 
                            alt="catdog" 
                            style={{ height: 200, maxWidth: "100%",  }}
                        />
                    </div>
                </Paper>
            </Box>
        </CustomBox2>
        <ServicesCard></ServicesCard>
      </Container>
    </Box>
  );
};

export default Home;