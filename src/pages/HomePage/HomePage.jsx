import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { getCategories } from "../../services/requests";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res))
      .catch((error) => console.log(error.status, error.message));
  }, []);

  return (
    <div>
      {categories && (
        <nav>
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
