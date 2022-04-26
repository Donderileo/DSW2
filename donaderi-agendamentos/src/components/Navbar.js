import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../modules/utils";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const size = useWindowSize();

  const [menu, setMenu] = useState(false);

  function openCloseMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/dashboard">
          <img src="logo.png" alt="Logo donaderi" className={styles.logo} />
        </NavLink>
        <ul
          className={`${styles.navbar__list} ${
            size.width < 768 ? styles.none : ""
          }`}
        >
          <li className={`${styles.navbar__item}`}>
            <NavLink
              to="/dashboard"
              className={(navData) => (navData.isActive ? styles.current : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li className={`${styles.navbar__item}`}>
            <NavLink
              to="/professional"
              className={(navData) => (navData.isActive ? styles.current : "")}
            >
              Professionals
            </NavLink>
          </li>
          <li className={`${styles.navbar__item}`}>
            <NavLink
              to="/appointments"
              className={(navData) => (navData.isActive ? styles.current : "")}
            >
              Appointments
            </NavLink>
          </li>
          <li className={`${styles.navbar__item}`}>
            <NavLink
              to="/account"
              className={(navData) => (navData.isActive ? styles.current : "")}
            >
              Account
            </NavLink>
          </li>
        </ul>

        <ul
          className={`${styles.navbar__list} ${
            size.width >= 768 ? styles.none : ""
          } ${styles.menu_sandwich}`}
          onClick={openCloseMenu}
        >
          {!menu && <HiMenuAlt3 />}
          {menu && <HiX />}
        </ul>
      </nav>
      <div className={`${!menu ? styles.none : ""} ${styles.menu}`}>
        <li className={`${styles.navbar__item__mobile}`}>
          <NavLink
            to="/dashboard"
            className={(navData) => (navData.isActive ? styles.current : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li className={`${styles.navbar__item__mobile}`}>
          <NavLink
            to="/professional"
            className={(navData) => (navData.isActive ? styles.current : "")}
          >
            Professionals
          </NavLink>
        </li>
        <li className={`${styles.navbar__item__mobile}`}>
          <NavLink
            to="/appointments"
            className={(navData) => (navData.isActive ? styles.current : "")}
          >
            Appointments
          </NavLink>
        </li>
        <li className={`${styles.navbar__item__mobile}`}>
          <NavLink
            to="/account"
            className={(navData) => (navData.isActive ? styles.current : "")}
          >
            Account
          </NavLink>
        </li>
      </div>
    </>
  );
}
