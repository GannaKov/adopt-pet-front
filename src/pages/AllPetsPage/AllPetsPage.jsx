// import { useEffect, useState } from "react";
// import { getLimitedAnimals } from "../../services/requests";
import { useNavigate, useLoaderData } from "react-router-dom";
import styles from "./AllPetsPage.module.css";

import PetsList from "../../components/PetsList/PetsList";
import Button from "@mui/material/Button";

const AllPetsPage = () => {
  const animalsLimitedObj = useLoaderData();
  const navigate = useNavigate();

  // const [animalsLimitedObj, setAnimalsLimitedObj] = useState({});

  // useEffect(() => {
  //   getLimitedAnimals()
  //     .then((res) => setAnimalsLimitedObj(res))
  //     .catch((error) => console.log(error.status, error.message));
  // }, []);
  return (
    <div className={styles.pageWrp}>
      <div className={styles.petsPageWrp}>
        <h1 className={styles.petsTitle}>All our Pets</h1>

        {animalsLimitedObj &&
          Object.entries(animalsLimitedObj).map(([type, animals]) => (
            <div key={type} className={styles.petsContainer}>
              <h2 className={styles.petsTypeTitle}>
                {type.replace(type.charAt(0), type.charAt(0).toUpperCase())}
              </h2>
              <PetsList animals={animals} />

              <Button
                onClick={() => navigate(`/animals/${type}`)}
                variant="contained"
                style={{ width: 140, marginLeft: "auto" }}
              >
                See More
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllPetsPage;
