# Arquitectura — WPA Incidencias

## 1. Visión

WPA Incidencias se plantea como una aplicación desacoplada, automatizable y preparada para evolucionar desde un despliegue local hacia cloud/Kubernetes.

El objetivo arquitectónico es separar claramente aplicación, persistencia, integración y plataforma, manteniendo un camino de despliegue reproducible.

## 2. Flujo de alto nivel

```text
                         ┌─────────────────┐
                         │ Usuarios / IT   │
                         └────────┬────────┘
                                  │ HTTPS
                                  ▼
                       ┌────────────────────┐
                       │ Reverse Proxy / LB │
                       └─────────┬──────────┘
                                 │
                                 ▼
                       ┌────────────────────┐
                       │  WPA Incidencias   │
                       │    Application     │
                       └──────┬─────┬───────┘
                              │     │
                    ┌─────────┘     └─────────┐
                    ▼                         ▼
             ┌─────────────┐          ┌────────────────┐
             │  Database   │          │ Integrations   │
             │             │          │ / Notifications│
             └─────────────┘          └────────────────┘

Developer
   │
   ▼
GitHub ──► CI ──► Security ──► Build ──► Registry ──► Deploy
                                                   │
                                                   ▼
                                             Cloud/Kubernetes
```

## 3. Principios

### Stateless application

La aplicación debería poder ejecutarse en múltiples réplicas sin depender del filesystem local para almacenar estado permanente.

### Configuration as Code

La configuración de entornos debe estar externalizada y versionada cuando sea seguro hacerlo. Los secretos nunca deben almacenarse en Git.

### Automation first

Los mismos artefactos y procesos deben utilizarse en desarrollo, integración y producción siempre que sea posible.

### Security by design

La seguridad debe formar parte del pipeline, no ser una validación posterior al despliegue.

### Observability by default

Logs estructurados, métricas y trazas deben incorporarse a medida que evolucione la aplicación.

## 4. Evolución de despliegue

### Fase 1 — Local

```text
Developer → Application → Local Database
```

### Fase 2 — CI/CD

```text
GitHub → CI → Tests → Security → Build
```

### Fase 3 — Containerización

```text
GitHub → CI → Container Image → Registry
```

### Fase 4 — Kubernetes

```text
GitHub → CI → Registry → Kubernetes
```

### Fase 5 — GitOps

```text
Developer → Git
              │
              ▼
          CI / Image
              │
              ▼
        Deployment Repo
              │
              ▼
           Argo CD
              │
              ▼
         Kubernetes
```

## 5. Seguridad

El modelo DevSecOps contempla:

- Protección de secretos.
- Dependencias actualizadas.
- SAST.
- Secret scanning.
- Análisis de imágenes cuando exista containerización.
- Análisis de IaC cuando se incorpore Terraform/Ansible.
- RBAC y mínimo privilegio.
- Separación de entornos.
- Auditoría de cambios mediante Git.

## 6. Observabilidad

Objetivo futuro:

```text
Application
   ├── Logs ───────► Centralized Logging
   ├── Metrics ────► Metrics Platform
   └── Traces ─────► Distributed Tracing
```

Las métricas iniciales deberían cubrir disponibilidad, latencia, errores y volumen de incidencias.

## 7. Decisiones pendientes

Antes de implementar la arquitectura definitiva deben concretarse:

- Lenguaje y framework de aplicación.
- Motor de base de datos.
- Estrategia de autenticación/autorización.
- Proveedor cloud.
- Necesidad real de Kubernetes.
- Estrategia de almacenamiento.
- Integraciones externas.
- Requisitos de disponibilidad y recuperación ante desastre.
