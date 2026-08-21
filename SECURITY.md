# Security Policy

## Objetivo

WPA Incidencias sigue un enfoque **DevSecOps**, incorporando controles de seguridad desde el desarrollo hasta el despliegue.

## Controles

- No almacenar secretos, contraseñas, tokens o credenciales en el repositorio.
- Revisar dependencias y vulnerabilidades antes de publicar versiones.
- Ejecutar secret scanning en CI.
- Aplicar mínimo privilegio a GitHub Actions.
- Revisar cambios mediante Pull Requests.
- Proteger la rama `main` cuando el proyecto entre en una fase colaborativa.
- Incorporar SAST, análisis de contenedores e IaC scanning cuando el stack lo requiera.

## Reportar una vulnerabilidad

No publiques vulnerabilidades de seguridad como issues públicos.

Para una instalación real del proyecto, debe habilitarse un canal privado de reporte y definirse un proceso de triage, evaluación, corrección y divulgación responsable.

## Buenas prácticas para colaboradores

Antes de hacer push:

```bash
git status
git diff --check
git diff --cached
```

Comprueba especialmente que no se hayan incluido:

- `.env`
- claves privadas
- tokens de API
- credenciales cloud
- dumps de bases de datos
- ficheros de configuración con secretos
