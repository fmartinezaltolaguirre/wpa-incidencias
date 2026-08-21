const STORAGE_KEY = "wpa_incidencias";

const datosIniciales = [
  {
    id: 1,
    titulo: "Error VPN",
    descripcion: "Usuarios sin acceso a la VPN corporativa.",
    estado: "Abierta",
    prioridad: "Alta",
    responsable: "Fernando",
  },
  {
    id: 2,
    titulo: "Acceso a aplicación corporativa",
    descripcion: "Un usuario no puede autenticarse en la aplicación.",
    estado: "En progreso",
    prioridad: "Media",
    responsable: "Soporte IT",
  },
  {
    id: 3,
    titulo: "Renovación de certificado",
    descripcion: "Certificado próximo a caducar en producción.",
    estado: "Resuelta",
    prioridad: "Crítica",
    responsable: "Infraestructura",
  },
];

function leerIncidencias() {
  try {
    const datos = localStorage.getItem(STORAGE_KEY);
    return datos ? JSON.parse(datos) : null;
  } catch {
    return null;
  }
}

export const getIncidencias = () => {
  const incidencias = leerIncidencias();

  if (Array.isArray(incidencias)) {
    return incidencias;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(datosIniciales));
  return datosIniciales;
};

export const addIncidencia = (incidencia) => {
  const nuevaIncidencia = {
    ...incidencia,
    id: Date.now(),
  };

  const resultado = [...getIncidencias(), nuevaIncidencia];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resultado));

  return nuevaIncidencia;
};

export const updateIncidencia = (id, cambios) => {
  const resultado = getIncidencias().map((incidencia) =>
    incidencia.id === id ? { ...incidencia, ...cambios } : incidencia,
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(resultado));
  return resultado.find((incidencia) => incidencia.id === id) ?? null;
};

export const clearIncidencias = () => {
  localStorage.removeItem(STORAGE_KEY);
};
