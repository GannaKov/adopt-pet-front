import styles from "./SinglePetPage.module.css";
/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useTheme, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSinglePet } from "../../services/requests";

const SinglePetPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pet_id, pet_type } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    getSinglePet(pet_type, pet_id)
      .then((res) => setPet(res))
      .catch((error) => console.log(error.status, error.message));
  }, [pet_id, pet_type]);

  return (
    <>
      <Button
        variant="contained"
        style={{ width: 140, marginBottom: "2rem" }}
        onClick={() => navigate(-1)}
      >
        &larr;&nbsp; Go Back
      </Button>
      {pet && (
        <Card sx={{ p: 1, borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Pet&apos;s id:&nbsp;&nbsp;
              <span style={{ textDecoration: "underline" }}>{pet.id}</span>
            </Typography>
          </CardContent>
          <CardMedia
            sx={{
              height: 280,
              width: "100%",
              //   [theme.breakpoints.down("sm")]: {
              //     width: "100%",
              //   },

              // [theme.breakpoints.up("sm")]: {
              //   width: 500,
              // },
              // [theme.breakpoints.up("lg")]: {
              //   width: 500,
              // },
            }}
            image={pet.url}
            title={pet.name}
          />
          <CardContent>
            <Typography variant="h6">{pet.name}</Typography>
            <Typography variant="body1">Breed: {pet.breed}</Typography>
            <Typography variant="body1">Age: {pet.age} year</Typography>
            <Typography variant="body1"> {pet.description}</Typography>
          </CardContent>
          <CardActions>
            {/* <Button
          size="small"
          sx={{ ml: "auto" }}
          onClick={() => navigate(`/animals/${animal.type}/${animal.id}`)}
        >
          Learn More
        </Button> */}
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default SinglePetPage;
