import { useState } from "react";
import { addIncidencia } from "../services/incidenciasService";
import { useNavigate } from "react-router-dom";

export default function NuevaIncidencia() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");

  const guardar = () => {
    addIncidencia({
      titulo,
      estado: "Abierta",
      prioridad: "Media",
      responsable: "Sin asignar",
    });

    navigate("/incidencias");
  };

  return (
    <div>
      <h1>Nueva Incidencia</h1>

      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />

      <button onClick={guardar}>
        Guardar
      </button>
    </div>
  );
}