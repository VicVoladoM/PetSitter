import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PetsIcon from "@mui/icons-material/Pets";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
            <Button color="inherit" 
              variant="h6" 
              sx={{ flexGrow: 1 }} 
              component={Link}
              to={"/"}
            >
              <PetsIcon sx={{ mr: 1 }} />
              <Typography variant="h6">
                PETSITTERS
              </Typography>
            </Button>
  
          <Button color="inherit" 
            variant="h6" 
            sx={{ flexGrow: 1 }}
            component={Link}
            to={"/cuidadores"}
          >
            <Typography variant="h6"  >
              ENCONTRAR CUIDADORES
            </Typography>
          </Button>
          <Button 
            color="inherit" 
            variant="h6" 
            sx={{ flexGrow: 1 }}
            component={Link}
            to={"/login"}
          >
            <Typography variant="h6"  >
              LOGIN
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}