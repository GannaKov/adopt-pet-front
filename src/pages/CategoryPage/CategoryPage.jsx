import { useParams, useNavigate } from "react-router-dom";

import styles from "./CategoryPage.module.css";
import { useEffect, useState } from "react";
import { getByType } from "../../services/requests";
import notFound from "../../assets/images/no_found.jpg";

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
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        &larr; Go Back
      </button>
      {error === 404 && (
        <>
          {" "}
          <p>There is not category {pet_type}</p>
          <img
            src={notFound}
            alt="Page not found"
            className={styles.notFoundImg}
          />
        </>
      )}
      {animalsArr && (
        <>
          <h1>
            {pet_type.replace(
              pet_type.charAt(0),
              pet_type.charAt(0).toUpperCase()
            )}
          </h1>
          {animalsArr.length > 0 ? (
            <ul>
              {animalsArr.map((animal) => (
                <li key={animal.id}>
                  <p>{animal.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>There are no animals in this category</p>
          )}
        </>
      )}
    </div>
  );
};

export default CategoryPage;
