/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useTheme, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";

const PetCard = ({ animal }) => {
  const theme = useTheme();

  return (
    <Card sx={{ p: 1, borderRadius: 2, boxShadow: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          id: {animal.id}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{
          height: 280,
          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },

          [theme.breakpoints.up("sm")]: {
            width: 500,
          },
          [theme.breakpoints.up("lg")]: {
            width: 350,
          },
        }}
        // lg={{ height: 280, width: 334 }}
        image={animal.url}
        title={animal.name}
        // style={{
        //   [theme.breakpoints.down("sm")]: {
        //     width: "100%",
        //   },

        //   [theme.breakpoints.up("sm")]: {
        //     width: 500,
        //   },
        //   [theme.breakpoints.up("lg")]: {
        //     width: 350,
        //   },
        // }}
      />
      <CardContent>
        <Typography variant="h6">{animal.name}</Typography>
        <Typography variant="body1">Breed: {animal.breed}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
