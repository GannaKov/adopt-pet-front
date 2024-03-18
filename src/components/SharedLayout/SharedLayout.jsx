import { Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div>
      <p>SharedLayout </p>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
