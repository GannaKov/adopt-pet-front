/* eslint-disable react/prop-types */
import Grid from "@mui/material/Grid";
import PetCard from "../PetCard/PetCard";

const PetsList = ({ animals }) => {
  return (
    <Grid container spacing={2} mb={2} sx={{ justifyContent: "center" }}>
      {animals.map((animal) => (
        <Grid item xs={12} lg={4} md={6} key={animal.id}>
          <PetCard animal={animal} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PetsList;
