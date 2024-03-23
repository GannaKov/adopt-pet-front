/* eslint-disable react/prop-types */
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
//import { getSinglePet } from "../../services/requests";
import styles from "./SinglePetPage.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useLoaderData } from "react-router-dom";

const SinglePetPage = () => {
  const pet = useLoaderData();
  const theme = useTheme();
  const navigate = useNavigate();
  //const { pet_id, pet_type } = useParams();
  // const [pet, setPet] = useState(null);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   getSinglePet(pet_type, pet_id)
  //     .then((res) => setPet(res))
  //     .catch((error) => {
  //       console.log(error.status, error.message);
  //       setError(error.response.status);
  //     });
  // }, [pet_id, pet_type]);

  return (
    <div className={styles.pageWrp}>
      <div className={styles.petsPageWrp}>
        <Button
          variant="contained"
          style={{ width: 140, marginBottom: "2rem" }}
          onClick={() => navigate(-1)}
        >
          &larr;&nbsp; Go Back
        </Button>
        {/* {error === 404 && (
        <div className={styles.petsContainer}>
          <h2 className={styles.petsTypeTitle}>
            There is not pet with id {pet_id}
          </h2>
          <img
            src={notFound}
            alt="Page not found"
            className={styles.notFoundImg}
          />
        </div>
      )} */}
        {pet && (
          <Card
            sx={{
              p: 1,
              borderRadius: 2,
              boxShadow: 3,
              width: "100%",

              [theme.breakpoints.up("md")]: {
                width: 800,
              },
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Pet&apos;s id:&nbsp;&nbsp;
                <span style={{ textDecoration: "underline" }}>{pet.id}</span>
              </Typography>
            </CardContent>
            <CardMedia
              sx={{
                height: 400,
                [theme.breakpoints.up("md")]: {
                  height: "280",
                },
                width: "100%",
                //   [theme.breakpoints.down("sm")]: {
                //     width: "100%",
                //   },

                [theme.breakpoints.up("md")]: {
                  width: 800,
                },
                // [theme.breakpoints.up("lg")]: {
                //   width: 500,
                // },
              }}
              image={pet.url}
              title={pet.name}
            />
            <CardContent>
              <Typography variant="h6">{pet.name}</Typography>
              <Typography variant="body1">
                <span style={{ fontWeight: 500 }}>Breed:&nbsp;&nbsp;</span>
                {pet.breed}
              </Typography>
              <Typography variant="body1">
                <span style={{ fontWeight: 500 }}>Age:&nbsp;&nbsp;</span>{" "}
                {pet.age} year
              </Typography>
              <Typography variant="body1"> {pet.description}</Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SinglePetPage;
