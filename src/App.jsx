import { useState } from "react";
import { comisiones as datosIniciales } from "./datos";
import Encabezado from "./componentes/Encabezado";
import Filtros from "./componentes/Filtros";
import Buscador from "./componentes/Buscador";
import ListaComisiones from "./componentes/ListaComisiones";

function App() {
  const [comisiones, setComisiones] = useState(datosIniciales);
  const [turnoActivo, setTurnoActivo] = useState("todos");
  const [busqueda, setBusqueda] = useState(""); // Estado para el buscador

  const handleInscribir = (id) => {
    setComisiones((prev) =>
      prev.map((c) =>
        c.id === id && c.inscriptos < c.cupo
          ? { ...c, inscriptos: c.inscriptos + 1 }
          : c
      )
    );
  };

  // Encadenamiento de .filter() para aplicar ambos criterios a la vez
  const comisionesFiltradas = comisiones
    .filter((c) => (turnoActivo === "todos" ? true : c.turno === turnoActivo))
    .filter((c) => c.nombre.toLowerCase().includes(busqueda.toLowerCase()));

  const totalComisiones = comisiones.length;
  const totalDisponibles = comisiones.filter((c) => c.inscriptos < c.cupo).length;

  return (
    <main style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Encabezado
        titulo="Cartelera de Comisiones"
        totalComisiones={totalComisiones}
        totalDisponibles={totalDisponibles}
      />
      <Buscador
        busqueda={busqueda}
        onCambiarBusqueda={setBusqueda}
      />
      <Filtros
        turnoActivo={turnoActivo}
        onCambiarTurno={setTurnoActivo}
      />
      <ListaComisiones
        comisiones={comisionesFiltradas}
        onInscribir={handleInscribir}
      />
    </main>
  );
}

export default App;