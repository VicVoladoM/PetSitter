import React from "react";
import Paper from '@mui/material/Paper';
import { Box, styled } from "@mui/material";

const Presentacion =  () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }
    }));

    return (
        <CustomBox
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              height: 400,
              flex: 1,
            },
          }}
        >
          <Paper elevation={5} ></Paper>
          <Paper elevation={5} ></Paper>
        </CustomBox>
      );

}

export default Presentacion;