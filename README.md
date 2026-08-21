# WPA Incidencias

Sistema de gestión y seguimiento de incidencias orientado a entornos corporativos.

> **Portfolio DevSecOps / Platform Engineering** — este repositorio está preparado para evolucionar desde el desarrollo local hacia una plataforma automatizada con CI/CD, seguridad integrada, observabilidad e infraestructura como código.

## 🎯 Objetivos

- Gestionar el ciclo de vida de las incidencias.
- Facilitar la trazabilidad de estados, responsables y prioridades.
- Automatizar validaciones mediante CI/CD.
- Integrar controles de seguridad desde el desarrollo.
- Preparar el despliegue reproducible mediante infraestructura como código.
- Evolucionar hacia una arquitectura cloud-native cuando el proyecto lo requiera.

## 🏗️ Arquitectura de referencia

```text
┌──────────────────────┐
│     Usuario / IT     │
└──────────┬───────────┘
           │ HTTPS
           ▼
┌──────────────────────┐
│     Aplicación WPA   │
│      Incidencias     │
└──────────┬───────────┘
           │
     ┌─────┴─────┐
     ▼           ▼
┌──────────┐ ┌────────────┐
│ Database │ │ Integrations│
└──────────┘ └────────────┘

              CI/CD
                │
                ▼
┌─────────────────────────────────────┐
│ GitHub → Build → Test → Security   │
│        → Package → Deploy          │
└─────────────────────────────────────┘
                │
                ▼
       Cloud / Kubernetes
```

Consulta la [arquitectura detallada](docs/architecture.md).

## 🔄 CI/CD

El repositorio incorpora una base de GitHub Actions para automatizar:

1. Validación del código.
2. Detección de errores de whitespace y problemas básicos del repositorio.
3. Controles de seguridad.
4. Preparación para añadir build, tests, empaquetado y despliegue según el stack definitivo.

Los workflows están en `.github/workflows/`.

## 🔐 DevSecOps

La estrategia propuesta integra seguridad en todo el ciclo:

```text
Plan → Code → Build → Test → Security → Release → Deploy → Operate
          │            │        │                         │
          └────────────┴────────┴─────────────────────────┘
                         Feedback
```

Controles recomendados:

- Secret scanning.
- Dependencias y vulnerabilidades.
- SAST.
- Análisis de contenedores si se utiliza Docker.
- IaC scanning si se incorpora Terraform/Ansible.
- Mínimo privilegio en GitHub Actions.
- Protección de ramas y revisiones obligatorias.

Consulta [`SECURITY.md`](SECURITY.md) para la política del proyecto.

## 📁 Estructura prevista

```text
wpa-incidencias/
├── .github/
│   └── workflows/
├── docs/
│   └── architecture.md
├── src/                 # Código de aplicación
├── tests/               # Tests automatizados
├── README.md
└── SECURITY.md
```

La estructura `src/` y `tests/` puede adaptarse al lenguaje/framework utilizado por el proyecto.

## 🚀 Desarrollo local

La forma exacta de ejecutar la aplicación dependerá del stack definitivo. Como principio, el flujo recomendado es:

```bash
git clone https://github.com/fmartinezaltolaguirre/wpa-incidencias.git
cd wpa-incidencias

# Instalar dependencias según el stack
# Ejecutar tests
# Arrancar la aplicación
```

## 🧭 Roadmap

- [x] Crear repositorio.
- [x] Documentar arquitectura de referencia.
- [x] Incorporar baseline CI/CD.
- [x] Incorporar baseline DevSecOps.
- [ ] Integrar el código de aplicación.
- [ ] Añadir tests automatizados.
- [ ] Añadir Dockerfile.
- [ ] Añadir pipeline de build y publicación de imagen.
- [ ] Añadir IaC.
- [ ] Despliegue en Kubernetes.
- [ ] GitOps con Argo CD.
- [ ] Observabilidad y métricas.

## 👤 Autor

Fernando Martínez Altolaguirre — DevSecOps Manager · Cloud Architect · Platform Engineering Leader.

[GitHub](https://github.com/fmartinezaltolaguirre) · [LinkedIn](https://linkedin.com/in/fmartinezaltolaguirre)
