import styles from "./Footer.module.css";

function Footer({ texto, anio }) {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.texto}>
        &copy; {anio} Colegio de Psicopedagogos de Salta. {texto}
      </p>
    </footer>
  );
}

export default Footer;