import { useEffect, useState } from "react";
import styles from "./AllPetsPage.module.css";
import { getLimitedAnimals } from "../../services/requests";
import { Link } from "react-router-dom";

const AllPetsPage = () => {
  const [animalsLimitedObj, setAnimalsLimitedObj] = useState({});

  useEffect(() => {
    getLimitedAnimals()
      .then((res) => setAnimalsLimitedObj(res))
      .catch((error) => console.log(error.status, error.message));
  }, []);
  return (
    <div>
      <h1>All our Pets</h1>

      {animalsLimitedObj &&
        Object.entries(animalsLimitedObj).map(([type, animals]) => (
          <div key={type}>
            <h2>
              {type.replace(type.charAt(0), type.charAt(0).toUpperCase())}
            </h2>
            <ul>
              {animals.map((animal) => (
                <li key={animal.id}>
                  <p>{animal.name}</p>
                </li>
              ))}
            </ul>
            <button type="button">See more</button>
          </div>
        ))}
    </div>
  );
};

export default AllPetsPage;
