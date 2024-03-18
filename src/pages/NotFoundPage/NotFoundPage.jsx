import notFound from "../../assets/images/no_page.jpg";
import { useRouteError } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={styles.pageWrp}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={notFound} alt="Page not found" className={styles.notFoundImg} />
    </div>
  );
};

export default NotFoundPage;
