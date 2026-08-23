export default function Buscador({ busqueda, onCambiarBusqueda }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Buscar comisión por nombre..."
        value={busqueda}
        onChange={(e) => onCambiarBusqueda(e.target.value)}
        style={{
          width: "100%",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          boxSizing: "border-box"
        }}
      />
    </div>
  );
}