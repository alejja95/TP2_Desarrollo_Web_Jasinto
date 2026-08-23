export default function Filtros({ turnoActivo, onCambiarTurno }) {
  const turnos = ["todos", "mañana", "tarde", "noche"];

  return (
    <div style={{ marginBottom: "15px" }}>
      {turnos.map((turno) => (
        <button
          key={turno}
          onClick={() => onCambiarTurno(turno)}
          style={{
            marginRight: "5px",
            fontWeight: turnoActivo === turno ? "bold" : "normal",
            backgroundColor: turnoActivo === turno ? "#2563eb" : "#e5e7eb",
            color: turnoActivo === turno ? "#ffffff" : "#000000"
          }}
        >
          {turno.toUpperCase()}
        </button>
      ))}
    </div>
  );
}