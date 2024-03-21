// import { useEffect, useState } from "react";
// import { home } from "../../services/requests";
import styles from "./HomePage.module.css";

import { Link, useLoaderData } from "react-router-dom";

const HomePage = () => {
  const categories = useLoaderData();

  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   getCategories()
  //     .then((res) => setCategories(res))
  //     .catch((error) => console.log(error.status, error.message));
  // }, []);

  return (
    <div className={styles.petsPageWrp}>
      {categories && (
        <nav className={styles.petsTypeNav}>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/animals/${category}`}>
                  {category.replace(
                    category.charAt(0),
                    category.charAt(0).toUpperCase()
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HomePage;
