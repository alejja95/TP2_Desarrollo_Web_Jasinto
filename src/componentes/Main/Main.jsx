import styles from "./Main.module.css";

function Main({ titulo, descripcion, items }) {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.hero}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.descripcion}>{descripcion}</p>
      </section>

      <section className={styles.contentSection}>
        <h3 className={styles.subtitulo}>Nuestros Servicios e Información Relevante</h3>
        <div className={styles.gridContainer}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.itemText}>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;