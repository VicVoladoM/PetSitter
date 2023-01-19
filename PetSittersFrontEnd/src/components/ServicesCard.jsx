import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Typography } from '@mui/material';



export default function ServicesCard() {
  return (
    <Grid  container
    spacing={1}
    direction="row"
    alignItems="center"
    justifyContent="center"
    sx={{mt: "2rem"}}
    style={{ minHeight: '50vh' }}>
      <Grid item xs={6} md={3}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image="https://www.thespruce.com/thmb/F_STinpMle-8UYdP0ab7IDao4vc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DogWashingStation-22a54f8fddbb4f3d934971845805bf71.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BAÑOS
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{textAlign: 'justify'}}>
                which is the same as saying through shrinking from toil and pain. 
                These cases are perfectly simple and easy to distinguish. 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              VER MAS
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
      <Card sx={{ maxWidth: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image="https://memeologiacom.files.wordpress.com/2018/11/206506_13_59cc052da8ad8.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CORTES
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{textAlign: 'justify'}}>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              VER MAS
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
      <Card sx={{ maxWidth: "100%", maxHeight:"auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image="https://adiestramientoenpositivo.org/wp-content/uploads/2019/03/Adiestramiento-Canino-1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ENTRENAMIENTO
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{textAlign: 'justify'}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              VER MAS 
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
      <Card sx={{ maxWidth: "100%"  }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image="https://imagenes.expreso.ec/files/image_700_402/uploads/2021/08/06/610db5cdbc443.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PASEOS
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{textAlign: 'justify'}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              VER MAS 
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
