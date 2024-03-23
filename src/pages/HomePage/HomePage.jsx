// import { useEffect, useState } from "react";
// import { home } from "../../services/requests";
import styles from "./HomePage.module.css";
import cat_1 from "../../assets/images/cat-1.png";
import cat_2 from "../../assets/images/cat-2.png";
import dog_2 from "../../assets/images/dog_2.png";

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
        <h2 className={styles.petsPageTitle}>Choose your new furry friend</h2>
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
        <div className={styles.homeImgWrp}>
          <img className={styles.homeImg1} src={dog_2} alt="dog" />
          <img className={styles.homeImg2} src={cat_1} alt="cat" />
          <img className={styles.homeImg3} src={cat_2} alt="cat" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
