import Portada from "./componentes-encabezado/portada";
import Contador from "./componentes-encabezado/Contador";
import Celebracion from "./componentes-encabezado/Ubicacion";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import MusicaXV from "./componentes-encabezado/musica";
import Itinerario from "./componentes-encabezado/itinerario";
import PadresMadrinas from "./componentes-encabezado/padres";

export default function Intinerario() {
  return (
    <div>

      <MusicaXV/>

      <Portada />

      <Contador />

      <PadresMadrinas/>

      <Celebracion />

      <Itinerario/>

      <Regalos />

      <Confirmacion />
    </div>
  );
}