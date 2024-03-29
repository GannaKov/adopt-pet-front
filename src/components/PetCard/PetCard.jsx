/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const PetCard = ({ animal }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ p: 1, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Pet&apos;s id:&nbsp;&nbsp;
          <span style={{ textDecoration: "underline" }}>{animal.id}</span>
        </Typography>
      </CardContent>
      <CardMedia
        sx={{
          height: 280,
          width: "100%",

        }}
     
        image={animal.url}
        title={animal.name}
      />
      <CardContent>
        <Typography variant="h6">{animal.name}</Typography>
        <Typography variant="body1">
          <span style={{ fontWeight: 500 }}>Breed:&nbsp;&nbsp;</span>
          {animal.breed}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          sx={{ ml: "auto" }}
          onClick={() => navigate(`/animals/${animal.type}/${animal.id}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
