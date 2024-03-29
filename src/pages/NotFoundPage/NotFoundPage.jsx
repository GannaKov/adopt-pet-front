import notFound from "../../assets/images/no_page.jpg";
import { useRouteError } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const error = useRouteError();

  return (
    <div className={styles.pageWrp}>
      <h1 className={styles.errorTitle}>Oops!</h1>
     
      <p className={styles.errorText}>
        <i>{error.response.statusText || error.message}</i>
      </p>
      <img src={notFound} alt="Page not found" className={styles.notFoundImg} />
    </div>
  );
};

export default NotFoundPage;
