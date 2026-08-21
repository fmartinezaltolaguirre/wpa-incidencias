import { useMemo } from "react";
import { getIncidencias } from "../services/incidenciasService";

const cardsConfig = [
  { titulo: "Abiertas", estado: "Abierta", color: "#ef4444" },
  { titulo: "En progreso", estado: "En progreso", color: "#f59e0b" },
  { titulo: "Resueltas", estado: "Resuelta", color: "#22c55e" },
  { titulo: "Cerradas", estado: "Cerrada", color: "#64748b" },
];

export default function Dashboard() {
  const incidencias = useMemo(() => getIncidencias(), []);

  const total = incidencias.length;
  const criticas = incidencias.filter((item) => item.prioridad === "Crítica").length;

  return (
    <section>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ margin: 0, fontSize: "36px" }}>Dashboard</h1>
        <p style={{ color: "#64748b", marginTop: "8px" }}>
          Resumen operativo de la gestión de incidencias.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "20px",
        }}
      >
        {cardsConfig.map((card) => {
          const valor = incidencias.filter((item) => item.estado === card.estado).length;

          return (
            <div
              key={card.estado}
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "12px",
                borderTop: `5px solid ${card.color}`,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ margin: 0 }}>{card.titulo}</h3>
              <p style={{ fontSize: "32px", fontWeight: "bold", margin: "10px 0 0" }}>
                {valor}
              </p>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
          <strong>Total de incidencias</strong>
          <div style={{ fontSize: "28px", marginTop: "8px" }}>{total}</div>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
          <strong>Prioridad crítica</strong>
          <div style={{ fontSize: "28px", marginTop: "8px", color: "#7f1d1d" }}>{criticas}</div>
        </div>
      </div>
    </section>
  );
}
