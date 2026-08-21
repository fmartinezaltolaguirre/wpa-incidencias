const STORAGE_KEY = "wpa_incidencias";

const datosIniciales = [
  {
    id: 1,
    titulo: "Error VPN",
    estado: "Abierta",
    prioridad: "Alta",
    responsable: "Fernando",
  },
  {
    id: 2,
    titulo: "Acceso a aplicación corporativa",
    estado: "En progreso",
    prioridad: "Media",
    responsable: "Soporte IT",
  },
  {
    id: 3,
    titulo: "Renovación de certificado",
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
  const incidencias = getIncidencias();
  const nuevaIncidencia = {
    ...incidencia,
    id: Date.now(),
  };

  const resultado = [...incidencias, nuevaIncidencia];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resultado));

  return nuevaIncidencia;
};

export const clearIncidencias = () => {
  localStorage.removeItem(STORAGE_KEY);
};
