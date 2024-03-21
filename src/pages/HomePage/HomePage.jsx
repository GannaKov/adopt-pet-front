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
    <div className={styles.pageWrp}>
      <div className={styles.petsPageWrp}>
        {categories && (
          <nav className={styles.petsTypeNav}>
            <ul>
              {categories.map((category) => (
                <li key={category} className={styles.petsTypeNavItem}>
                  <Link
                    to={`/animals/${category}`}
                    className={styles.petsTypeNavLink}
                  >
                    {category.replace(
                      category.charAt(0),
                      category.charAt(0).toUpperCase()
                    )}
                    &nbsp;&rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default HomePage;
