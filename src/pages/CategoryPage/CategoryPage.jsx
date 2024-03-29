// import { useEffect, useState } from "react";
// import { getByType } from "../../services/requests";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";

import styles from "./CategoryPage.module.css";
import Button from "@mui/material/Button";

import PetsList from "../../components/PetsList/PetsList";

const CategoryPage = () => {
  const navigate = useNavigate();

  const isLoading = navigate.state === "loading";
  const { pet_type } = useParams();

  const animalsArr = useLoaderData();

  // const [animalsArr, setAnimalsArr] = useState(null);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   getByType(pet_type)
  //     .then((res) => setAnimalsArr(res))
  //     .catch((error) => {
  //       setError(error.response.status);
  //       console.log(error.response.status, error.response.data);
  //     });
  // }, [pet_type]);

  return (
    <div className={styles.pageWrp}>
      <div className={styles.petsPageWrp}>
        <Button
          variant="contained"
          style={{ width: 140, margin: "0 auto 2rem" }}
          onClick={() => navigate(-1)}
        >
          &larr;&nbsp; Go Back
        </Button>
        {isLoading && (
          <CircularProgress style={{ margin: "0 auto" }} color="secondary" />
        )}
        <div>
          {/* {error === 404 && (
          <div className={styles.petsContainer}>
            <h2 className={styles.petsTypeTitle}>
              There is not category {pet_type}
            </h2>
            <img
              src={notFound}
              alt="Page not found"
              className={styles.notFoundImg}
            />
          </div>
        )} */}
          {animalsArr && (
            <div className={styles.petsContainer}>
              <h1 className={styles.petsTypeTitle}>
                {pet_type.replace(
                  pet_type.charAt(0),
                  pet_type.charAt(0).toUpperCase()
                )}
              </h1>
              {animalsArr.length > 0 ? (
                <PetsList animals={animalsArr} />
              ) : (
                <p>There are no animals in this category</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
