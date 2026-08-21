import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Incidencias from "../pages/Incidencias";
import NuevaIncidencia from "../pages/NuevaIncidencia";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/incidencias" element={<Incidencias />} />
      <Route path="/nueva" element={<NuevaIncidencia />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
