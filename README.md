# WPA Incidencias

Aplicación web para la gestión y seguimiento de incidencias en entornos corporativos.

> **Portfolio DevSecOps / Platform Engineering** — el proyecto parte de una SPA React y evoluciona progresivamente hacia una plataforma con API, persistencia, CI/CD, seguridad, observabilidad y despliegue cloud-native.

## 🧱 Stack actual

- React 19
- Vite 8
- React Router 7
- Axios
- Lucide React
- Oxlint
- Persistencia local temporal mediante `localStorage`

## ✅ MVP actual

- Dashboard con métricas de incidencias.
- Listado de incidencias.
- Búsqueda por título y responsable.
- Filtro por estado.
- Creación de nuevas incidencias.
- Prioridad y responsable.
- Cambio de estado: **Abierta → En progreso → Resuelta → Cerrada**.
- Persistencia local para desarrollo del MVP.

## 🏗️ Arquitectura objetivo

```text
                           WPA INCIDENCIAS

┌──────────────┐      HTTPS      ┌─────────────────┐
│    Usuario   │ ──────────────► │ React + Vite    │
└──────────────┘                 │    Frontend     │
                                 └────────┬────────┘
                                          │ REST API
                                          ▼
                                 ┌─────────────────┐
                                 │ Backend / API   │
                                 │    FastAPI      │
                                 └────────┬────────┘
                                          │
                                          ▼
                                 ┌─────────────────┐
                                 │   PostgreSQL    │
                                 └─────────────────┘

             CI/CD + DevSecOps + Observability + GitOps
```

La arquitectura se detalla en [`docs/architecture.md`](docs/architecture.md).

## 🔄 CI/CD

GitHub Actions valida actualmente el frontend mediante:

1. Instalación reproducible con `npm ci`.
2. Lint con Oxlint.
3. Build de producción con Vite.
4. Validación de whitespace del repositorio.

Los workflows están en [`.github/workflows/`](.github/workflows/).

## 🔐 DevSecOps

La evolución prevista incorpora:

- Secret scanning.
- Dependency review y análisis de vulnerabilidades.
- SAST.
- Análisis de imágenes Docker con Trivy.
- SBOM.
- IaC scanning.
- Mínimo privilegio en GitHub Actions.
- Protección de ramas y revisiones mediante Pull Requests.

Consulta [`SECURITY.md`](SECURITY.md).

## 📁 Estructura

```text
wpa-incidencias/
├── .github/workflows/     # CI/CD y seguridad
├── docs/                  # Arquitectura y decisiones
├── public/                # Recursos públicos
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── context/           # Estado transversal
│   ├── data/              # Datos de aplicación
│   ├── hooks/             # Hooks reutilizables
│   ├── mock/              # Datos mock
│   ├── pages/             # Vistas
│   ├── routes/            # Routing
│   └── services/          # Acceso a datos/API
├── README.md
├── SECURITY.md
├── package.json
└── vite.config.js
```

## 🚀 Desarrollo local

```bash
git clone https://github.com/fmartinezaltolaguirre/wpa-incidencias.git
cd wpa-incidencias
npm ci
npm run dev
```

Para validar producción:

```bash
npm run lint
npm run build
npm run preview
```

## 🧭 Roadmap

### M1 — MVP funcional

- [x] Dashboard.
- [x] Listado y búsqueda de incidencias.
- [x] Creación de incidencias.
- [x] Workflow de estados.
- [x] Persistencia local para MVP.

### M2 — Backend y persistencia

- [ ] API REST con FastAPI.
- [ ] PostgreSQL.
- [ ] Modelo de dominio y migraciones.
- [ ] Validación de datos.
- [ ] Auditoría de cambios.

### M3 — Identidad y seguridad

- [ ] Autenticación.
- [ ] RBAC.
- [ ] Integración preparada para Microsoft Entra ID.
- [ ] Gestión de secretos.

### M4 — DevSecOps

- [x] CI de lint y build.
- [x] Baseline de seguridad.
- [ ] Tests unitarios e integración.
- [ ] Docker.
- [ ] SAST y dependency scanning.
- [ ] SBOM y análisis de imagen.

### M5 — Cloud Native

- [ ] Kubernetes.
- [ ] Helm.
- [ ] Terraform.
- [ ] Argo CD / GitOps.
- [ ] Observabilidad con OpenTelemetry, Prometheus y Grafana.

### M6 — AI Incident Assistant

- [ ] Clasificación automática.
- [ ] Sugerencia de prioridad.
- [ ] Detección de incidencias similares.
- [ ] Asistente de diagnóstico y resolución.

## 👤 Autor

Fernando Martínez Altolaguirre — DevSecOps Manager · Cloud Architect · Platform Engineering Leader.

[GitHub](https://github.com/fmartinezaltolaguirre) · [LinkedIn](https://linkedin.com/in/fmartinezaltolaguirre)
