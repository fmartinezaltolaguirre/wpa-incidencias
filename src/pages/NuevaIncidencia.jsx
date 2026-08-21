import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addIncidencia } from "../services/incidenciasService";

const prioridades = ["Baja", "Media", "Alta", "Crítica"];

export default function NuevaIncidencia() {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    titulo: "",
    descripcion: "",
    prioridad: "Media",
    responsable: "Sin asignar",
  });
  const [error, setError] = useState("");

  const actualizarCampo = (campo, valor) => {
    setFormulario((actual) => ({ ...actual, [campo]: valor }));
  };

  const guardar = (event) => {
    event.preventDefault();

    if (!formulario.titulo.trim()) {
      setError("El título es obligatorio.");
      return;
    }

    addIncidencia({
      ...formulario,
      titulo: formulario.titulo.trim(),
      descripcion: formulario.descripcion.trim(),
      estado: "Abierta",
    });

    navigate("/incidencias");
  };

  return (
    <section style={{ maxWidth: "760px" }}>
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ margin: 0 }}>Nueva incidencia</h1>
        <p style={{ color: "#64748b", marginTop: "8px" }}>
          Registra una incidencia y establece su prioridad inicial.
        </p>
      </div>

      <form
        onSubmit={guardar}
        style={{
          background: "white",
          padding: "28px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <label style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>
          Título
        </label>
        <input
          value={formulario.titulo}
          onChange={(event) => actualizarCampo("titulo", event.target.value)}
          placeholder="Ej. Error de acceso a VPN"
          maxLength={120}
          autoFocus
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "11px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />

        <label style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>
          Descripción
        </label>
        <textarea
          value={formulario.descripcion}
          onChange={(event) => actualizarCampo("descripcion", event.target.value)}
          placeholder="Describe el problema, impacto y contexto..."
          rows={6}
          maxLength={2000}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "11px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            resize: "vertical",
            marginBottom: "20px",
          }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>
              Prioridad
            </label>
            <select
              value={formulario.prioridad}
              onChange={(event) => actualizarCampo("prioridad", event.target.value)}
              style={{
                width: "100%",
                padding: "11px 12px",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                background: "white",
              }}
            >
              {prioridades.map((prioridad) => (
                <option key={prioridad}>{prioridad}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>
              Responsable
            </label>
            <input
              value={formulario.responsable}
              onChange={(event) => actualizarCampo("responsable", event.target.value)}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "11px 12px",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>

        {error && (
          <p role="alert" style={{ color: "#b91c1c", marginTop: "16px" }}>
            {error}
          </p>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "24px" }}>
          <button
            type="button"
            onClick={() => navigate("/incidencias")}
            style={{
              padding: "11px 16px",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              background: "white",
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>
          <button
            type="submit"
            style={{
              padding: "11px 16px",
              border: 0,
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Crear incidencia
          </button>
        </div>
      </form>
    </section>
  );
}
