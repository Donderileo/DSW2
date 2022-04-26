import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { useWindowSize } from "../modules/utils";
import styles from "../styles/navbar.module.css";
import Swal from 'sweetalert2';

export default function Navbar() {
  const size = useWindowSize();
  const [menu, setMenu] = useState(false);

  function openCloseMenu() {
    setMenu(!menu);
  }

  const navigate = useNavigate();
  function logout() {
    Swal.fire({
      title: 'Atenção!',
      text: 'Deseja mesmo sair ?',
      icon: 'error',
      confirmButtonText: 'Sim',
      confirmButtonColor: '#3b67f2',
      cancelButtonColor: '#2e3137',
      showCancelButton: true,
      cancelButtonText: 'Não'
    }).then((e) => {
      if (e.isConfirmed){
        localStorage.removeItem('token');
        navigate('/login');
      } 
    })
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
          <li className={`${styles.navbar__item}`}>
            <a onClick={logout}>
              Logout
            </a>
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
