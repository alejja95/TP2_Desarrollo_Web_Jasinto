import styles from "./Navbar.module.css";

function Navbar({ titulo, links }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.titulo}>{titulo}</h1>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.linkList}>
          {links.map((link, index) => (
            <li key={index} className={styles.linkItem}>
              <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className={styles.link}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;