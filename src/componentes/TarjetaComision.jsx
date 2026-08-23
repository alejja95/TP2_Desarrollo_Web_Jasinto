import Etiqueta from "./Etiqueta";

export default function TarjetaComision({ comision, onInscribir }) {
  const { id, nombre, profe, cupo, inscriptos, turno, nivel } = comision;
  const disponibles = cupo - inscriptos;
  const sinCupo = inscriptos >= cupo;

  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "10px", borderRadius: "6px" }}>
      <h3>{nombre}</h3>
      <p>Profesor: {profe}</p>
      
      {/* Etiqueta reutilizada dos veces con distintas props */}
      <Etiqueta texto={`Turno: ${turno}`} tipo="turno" />
      <Etiqueta texto={`Nivel: ${nivel}`} tipo="nivel" />

      {/* 1. Ternario para lugares */}
      <p>Estado: {sinCupo ? "Sin cupo" : `Lugares restantes: ${disponibles}`}</p>

      {/* 2. Operador && para aviso */}
      {disponibles <= 3 && disponibles > 0 && (
        <p style={{ color: "orange", fontWeight: "bold" }}>¡Últimos lugares!</p>
      )}

      {/* 3. Botón deshabilitado cuando no hay cupo */}
      <button disabled={sinCupo} onClick={() => onInscribir(id)}>
        Inscribirme
      </button>
    </div>
  );
}