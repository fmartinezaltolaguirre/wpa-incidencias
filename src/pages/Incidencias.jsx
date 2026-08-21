import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getIncidencias } from "../services/incidenciasService";

const estadoStyles = {
  Abierta: { background: "#fee2e2", color: "#991b1b" },
  "En progreso": { background: "#fef3c7", color: "#92400e" },
  Resuelta: { background: "#dcfce7", color: "#166534" },
  Cerrada: { background: "#e2e8f0", color: "#334155" },
};

const prioridadStyles = {
  Baja: "#16a34a",
  Media: "#d97706",
  Alta: "#dc2626",
  Crítica: "#7f1d1d",
};

export default function Incidencias() {
  const navigate = useNavigate();
  const [incidencias, setIncidencias] = useState([]);
  const [filtroEstado, setFiltroEstado] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    setIncidencias(getIncidencias());
  }, []);

  const incidenciasFiltradas = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();

    return incidencias.filter((incidencia) => {
      const coincideEstado =
        filtroEstado === "Todas" || incidencia.estado === filtroEstado;
      const coincideTexto =
        !texto ||
        incidencia.titulo.toLowerCase().includes(texto) ||
        incidencia.responsable.toLowerCase().includes(texto);

      return coincideEstado && coincideTexto;
    });
  }, [incidencias, filtroEstado, busqueda]);

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Incidencias</h1>
          <p style={{ color: "#64748b", marginTop: "8px" }}>
            Gestión y seguimiento del ciclo de vida de las incidencias.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/nueva")}
          style={{
            border: 0,
            borderRadius: "8px",
            padding: "11px 16px",
            background: "#2563eb",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          + Nueva incidencia
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          placeholder="Buscar por título o responsable"
          aria-label="Buscar incidencias"
          style={{
            flex: "1 1 280px",
            minWidth: "220px",
            padding: "11px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
          }}
        />

        <select
          value={filtroEstado}
          onChange={(event) => setFiltroEstado(event.target.value)}
          aria-label="Filtrar por estado"
          style={{
            padding: "11px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            background: "white",
          }}
        >
          <option>Todas</option>
          <option>Abierta</option>
          <option>En progreso</option>
          <option>Resuelta</option>
          <option>Cerrada</option>
        </select>
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        {incidenciasFiltradas.length === 0 ? (
          <div style={{ padding: "32px", color: "#64748b" }}>
            No hay incidencias que coincidan con los filtros seleccionados.
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc", textAlign: "left" }}>
                  <th style={{ padding: "14px 16px" }}>ID</th>
                  <th style={{ padding: "14px 16px" }}>Título</th>
                  <th style={{ padding: "14px 16px" }}>Estado</th>
                  <th style={{ padding: "14px 16px" }}>Prioridad</th>
                  <th style={{ padding: "14px 16px" }}>Responsable</th>
                </tr>
              </thead>
              <tbody>
                {incidenciasFiltradas.map((incidencia) => (
                  <tr key={incidencia.id} style={{ borderTop: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "14px 16px", color: "#64748b" }}>
                      #{incidencia.id}
                    </td>
                    <td style={{ padding: "14px 16px", fontWeight: 600 }}>
                      {incidencia.titulo}
                    </td>
                    <td style={{ padding: "14px 16px" }}>
                      <span
                        style={{
                          ...estadoStyles[incidencia.estado],
                          padding: "5px 9px",
                          borderRadius: "999px",
                          fontSize: "13px",
                          fontWeight: 600,
                        }}
                      >
                        {incidencia.estado}
                      </span>
                    </td>
                    <td style={{ padding: "14px 16px", fontWeight: 600, color: prioridadStyles[incidencia.prioridad] || "#475569" }}>
                      {incidencia.prioridad}
                    </td>
                    <td style={{ padding: "14px 16px" }}>
                      {incidencia.responsable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
