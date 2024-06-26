import { NavLink, Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css";
import mause from "../../assets/images/mause-2.png";

const SharedLayout = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.headerWrp}>
        <nav className={styles.headerNav}>
          <img className={styles.headerLogo} src={mause} alt="Logo" />
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.headerNavLink}`
                    : `${styles.headerNavLink}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                end
                to="/animals"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.headerNavLink}`
                    : `${styles.headerNavLink}`
                }
              >
                Animals
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/contact-form"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.headerNavLink}`
                    : `${styles.headerNavLink}`
                }
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    
      <Outlet />
    
    </div>
  );
};

export default SharedLayout;
