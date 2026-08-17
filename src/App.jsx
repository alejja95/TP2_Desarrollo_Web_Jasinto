import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const nombreColegio = "Colegio de Psicopedagogos de Salta";
  const seccionesNav = ["Inicio", "Institucional", "Matriculación", "Contacto"];

  const tituloPrincipal = "Psicopedagogía de la Provincia de Salta";
  const descripcionGeneral = 
    "Promoviendo el desarrollo profesional, la ética en la práctica psicopedagógica y la regulación de la matrícula profesional en toda la provincia.";
  const serviciosDestacados = [
    "Requisitos y Guía Digital para el Trámite de Matriculación Profesional Ley Nº 6830.",
    "Buscador Público y Padrón Oficial de Psicopedagogos Matriculados Habilitados.",
    "Programa de Capacitación Continua y Jornadas de Actualización Académica 2026."
  ];

  const leyendaCopyright = "Todos los derechos reservados. Mantenimiento del Sistema Institucional.";
  const anioVigente = new Date().getFullYear();

  return (
    <>
      <Navbar
        titulo={nombreColegio}
        links={seccionesNav}
      />
      <Main
        titulo={tituloPrincipal}
        descripcion={descripcionGeneral}
        items={serviciosDestacados}
      />
      <Footer
        texto={leyendaCopyright}
        anio={anioVigente}
      />
    </>
  );
}

export default App;