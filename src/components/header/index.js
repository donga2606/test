import styles from "./Header.module.scss";
import clsx from "clsx";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className="container">
        <div className={styles.header}>
          <a className={styles.logo} href="#" className={styles.menu__link}>
            <img
              src="../../assets/img/logo.png"
              srcSet="../../assets/img/logo@2x.png 2x,
             ../../assets/img/logo@3x.png 3x"
              alt="logo"
              className={styles.logo__img}
            ></img>
          </a>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>introduction</a>
            </li>
            <li className={clsx(styles.menu__item, styles.menu__solution)}>
              <a href="#" className={styles.menu__link}>solution</a>
            </li>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>Rate plan</a>
            </li>
            <li className={styles.menu__split} />
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>login</a>
            </li>
            <li className={clsx(styles.menu__item, styles.menu__apply)}>
              <a href="#" className={styles.menu__link}>Apply for free use</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
