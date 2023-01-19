import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "55px",
  color: "black",
  fontWeight: "bold",
  margin: theme.spacing(4, 0, 2, 0),
  paddingTop: "3rem"
}));

let petTypesList = [
  {
    id: 0,
    url: "https://www.tree-hugger8.net/image0397/de/de17de23350dfa699aef4b52cfb23a87.jpg",
    nombre: "Serpientes",
  },
  {
    id: 1,
    url: "https://images.ecestaticos.com/K-H13opp5EdmIWo61v0sXMfywco=/0x87:2155x1283/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg",
    nombre: "Perro",
  },
  {
    id: 2,
    url: "https://static.nationalgeographicla.com/files/styles/image_3200/public/green-iguana.webp?w=664&h=443",
    nombre: "Iguana",
  },
];

export default function PetCard() {
  return (
    <Container>
        <Title variant="h1" sx={{ fontSize: "30px" }}>
          SERVICIOS PARA
        </Title>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {petTypesList.map((pet) => (
          <Paper elevation={3} sx={{ width: "10" }}>
            <Box sx={{ p: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  width={50}
                  image={pet.url}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {pet.nombre}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
