export default function Encabezado({ titulo, totalComisiones, totalDisponibles }) {
  return (
    <header>
      <h1>{titulo}</h1>
      <p>Total de comisiones: {totalComisiones} | Comisiones disponibles: {totalDisponibles}</p>
    </header>
  );
}