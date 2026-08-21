import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const estiloLink = ({ isActive }) => ({
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: isActive ? "#334155" : "transparent",
    marginBottom: "10px",
  });

  return (
    <aside
      style={{
        width: "220px",
        backgroundColor: "#1e293b",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>WPA</h2>

      <nav>
        <NavLink to="/" style={estiloLink}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/incidencias" style={estiloLink}>
          🎫 Incidencias
        </NavLink>
      </nav>
    </aside>
  );
}