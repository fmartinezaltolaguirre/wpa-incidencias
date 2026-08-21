const STORAGE_KEY = "wpa_incidencias";

const datosIniciales = [
  {
    id: 1,
    titulo: "Error VPN",
    estado: "Abierta",
    prioridad: "Alta",
    responsable: "Fernando",
  },
];

export const getIncidencias = () => {
  const datos = localStorage.getItem(STORAGE_KEY);

  if (!datos) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(datosIniciales)
    );

    return datosIniciales;
  }

  return JSON.parse(datos);
};

export const addIncidencia = (incidencia) => {
  const incidencias = getIncidencias();

  incidencias.push({
    ...incidencia,
    id: Date.now(),
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(incidencias)
  );
};