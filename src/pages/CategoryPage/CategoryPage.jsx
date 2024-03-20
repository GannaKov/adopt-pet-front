import { useParams, useNavigate } from "react-router-dom";

import styles from "./CategoryPage.module.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { getByType } from "../../services/requests";
import notFound from "../../assets/images/no_found.jpg";
import PetsList from "../../components/PetsList/PetsList";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { pet_type } = useParams();
  const [animalsArr, setAnimalsArr] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    getByType(pet_type)
      .then((res) => setAnimalsArr(res))
      .catch((error) => {
        setError(error.response.status);
        console.log(error.response.status, error.response.data);
      });
  }, [pet_type]);

  return (
    <div className={styles.petsPageWrp}>
      <Button
        variant="contained"
        style={{ width: 140, margin: "0 auto 2rem" }}
        onClick={() => navigate(-1)}
      >
        &larr;&nbsp; Go Back
      </Button>
      <div>
        {error === 404 && (
          <>
            <p>There is not category {pet_type}</p>
            <img
              src={notFound}
              alt="Page not found"
              className={styles.notFoundImg}
            />
          </>
        )}
        {animalsArr && (
          <div className={styles.petsContainer}>
            <h1 className={styles.petsTypeTitle}>
              {pet_type.replace(
                pet_type.charAt(0),
                pet_type.charAt(0).toUpperCase()
              )}
            </h1>
            {animalsArr.length > 0 ? (
              // <ul>
              //   {animalsArr.map((animal) => (
              //     <li key={animal.id}>
              //       <p>{animal.name}</p>
              //     </li>
              //   ))}
              // </ul>
              <PetsList animals={animalsArr} />
            ) : (
              <p>There are no animals in this category</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
