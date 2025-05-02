import React from "react";
import styles from "./Header.module.css";
import "../../index.css";
import logo from "../../assets/FashionFeedLogo.png"

const Header = () => {
  return (
    <header className={styles["main-header"]}>
      <div className={`${styles.container} ${styles["header-content"]}`}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="Logo Fast Time" />
          </a>
        </div>

        <nav className={styles["main-nav"]}>
          <ul>
            <li>
              <a href="#">
                Nam
                <svg className={styles["dropdown-arrow"]} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                Nữ
                <svg className={styles["dropdown-arrow"]} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </li>
           
            <li>
              <a href="#">
                Trẻ em
                <svg className={styles["dropdown-arrow"]} xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles["header-actions"]}>
          <div className={styles["search-container"]}>
            <input type="search" className={styles["search-input"]} placeholder="Tìm Là Thấy" />
            <button type="submit" className={styles["search-button"]}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>

          <button className={styles["mobile-menu-toggle"]} aria-label="Mở menu chính">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
