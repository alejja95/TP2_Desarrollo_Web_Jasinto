import TarjetaComision from "./TarjetaComision";
import SinResultados from "./SinResultados";

export default function ListaComisiones({ comisiones, onInscribir }) {
  // Manejo mediante early return
  if (comisiones.length === 0) {
    return <SinResultados />;
  }

  return (
    <div>
      {comisiones.map((comision) => (
        <TarjetaComision
          key={comision.id}
          comision={comision}
          onInscribir={onInscribir}
        />
      ))}
    </div>
  );
}