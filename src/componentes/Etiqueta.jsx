export default function Etiqueta({ texto, tipo }) {
  const estilos = {
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    marginRight: "5px",
    backgroundColor: tipo === "turno" ? "#e0f2fe" : "#fef3c7",
    color: tipo === "turno" ? "#0369a1" : "#b45309"
  };

  return <span style={estilos}>{texto}</span>;
}